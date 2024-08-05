// utils/localStorageUtils.js

// Função para obter a wishlist do Local Storage
export const getWishlistFromLocalStorage = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  };
  
  // Função para salvar a wishlist no Local Storage
  export const saveWishlistToLocalStorage = (wishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  // Função para adicionar um item à wishlist e atualizar o Local Storage
  export const addToWishlist = (item, wishlist, setWishlist) => {
    const newWishlist = [...wishlist, item];
    setWishlist(newWishlist);
    saveWishlistToLocalStorage(newWishlist);
  };
  
  // Função para remover um item da wishlist e atualizar o Local Storage
  export const removeFromWishlist = (id, wishlist, setWishlist) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
    saveWishlistToLocalStorage(newWishlist);
  };
  