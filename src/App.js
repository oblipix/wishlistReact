// src/App.js
import React, { useState, useEffect } from 'react';
import { IoBackspaceOutline, IoCheckboxOutline } from 'react-icons/io5';
import MyCalendar from './components/Calendar/Calendar'; // Importe o componente Calendar
import Clock from './components/Clock/Clock'; // Importe o componente Clock
import './App.css';
import {
    getWishlistFromLocalStorage,
    saveWishlistToLocalStorage
} from './utils/localStorageUtils'; // Importe as funções

const App = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    // Função para carregar itens do Local Storage
    const loadItems = () => {
        const storedItems = getWishlistFromLocalStorage();
        setItems(storedItems);
    };

    // Função para salvar itens no Local Storage
    const saveItems = (items) => {
        saveWishlistToLocalStorage(items);
    };

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        if (newItem.trim()) {
            const newItemObject = { id: Date.now(), name: newItem, selected: false };
            const updatedItems = [...items, newItemObject];
            setItems(updatedItems);
            saveItems(updatedItems);
            setNewItem(''); // Limpa o campo de input
        }
    };

    // Função para remover uma tarefa
    const removeTask = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        saveItems(updatedItems);
    };

    // Função para alternar o estado de seleção de uma tarefa
    const toggleSelect = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setItems(updatedItems);
        saveItems(updatedItems);
    };

    // Carregar itens do Local Storage ao montar o componente
    useEffect(() => {
        loadItems();
    }, []);

    return (
        <>
            <div className="App">
                <h1>Minha Wishlist</h1>
                <div>
                    <input
                        className="input"
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Adicione um novo item" />
                    <buttonn onClick={addTask}>+</buttonn>
                </div>
                <ul>
                    {items.map(item => (
                        <li key={item.id} className={item.selected ? 'selected' : ''}>
                            <span>{item.name}</span>
                            <div className="button-container">
                                <button className="button-icon" onClick={() => toggleSelect(item.id)}>
                                    <IoCheckboxOutline />
                                </button>
                                <button className="button-icon" onClick={() => removeTask(item.id)}>
                                    <IoBackspaceOutline />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="calendar-container">
                <MyCalendar />
            </div>
            <div className="widget-clock-container">
                <Clock />
            </div>
        </>
    );
};

export default App;
