import { create } from "zustand";

const useCategoriesStore = create( (set) => ({
     categories : [
        { id: 1, name: "All", isActive: true },

        { id: 2, name: "jewelery", isActive: false },
        { id: 3, name: "men's clothing", isActive: false },
        { id: 4, name: "women's clothing", isActive: false },
        { id: 5, name: "electronics", isActive: false },

      ],
      activeCategory : (id) => set((state) => ({
        categories : state.categories.map( el => el.id === id ? {...el , isActive : true} : {...el , isActive :false})
      }))
      
    
}))
export default useCategoriesStore