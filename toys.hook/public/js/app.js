const App = {
    data() {
        return {
            showWishlist: true,
            products: [
                {
                    name: "мишка",
                    description: {
                        materials: "шерсть",
                        weight: 54.21,
                        size: 12
                    },
                    price: 430
                },
                {
                    name: "зайка",
                    description: {
                        materials: "шерсть",
                        weight: 24.11,
                        size: 22
                    },
                    price: 390
                },
                {
                    name: "коралина",
                    description: {
                        materials: "акрил",
                        weight: 24.31,
                        size: 26
                    },
                    price: 670
                }],
            searchText: "",
            sortType: 0,
            filterPriceMin: "",
            filterPriceMax: "",
            filterMaterials: "",
            wishlist: [],
            counter: 1
        }
    },
    mounted(){
        this.wishlist.push(this.products[0]);
        this.wishlist.push(this.products[1]);
    },
    methods:{
// counter(){

// }
    },
    computed: {
        show: {
            get() {
                return this.showWishlist;
            },
            set(value){
                document.querySelector('body').style.overflowY =  value ? 'hidden' : 'auto';
                this.showWishlist = value;
            }
        },
        computedProducts() {
            let filtered = this.products
                .filter(x => x.name.toUpperCase().includes(this.searchText.toUpperCase()));

            const priceMin = parseFloat(this.filterPriceMin);
            if (priceMin) {
                filtered = filtered.filter(x => x.price >= priceMin)
            }
            const priceMax = parseFloat(this.filterPriceMax);
            if (priceMax) {
                filtered = filtered.filter(x => x.price <= priceMax)
            }

            if (this.filterMaterials)
                filtered = filtered.filter(x => x.description.materials.toUpperCase() === this.filterMaterials.toUpperCase());
            switch (this.sortType) {
                case '1': return filtered.sort((x, y) => y.price - x.price);
                case '2': return filtered.sort((x, y) => x.price - y.price);
                case '3': return filtered.sort((x, y) => y.description.size - x.description.size);
                case '4': return filtered.sort((x, y) => x.description.size - y.description.size);

                default: return filtered;
            }
        }
    }
}

Vue.createApp(App).mount("#app");