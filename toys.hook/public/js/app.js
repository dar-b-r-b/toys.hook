const App = {
    data() {
        return {
            products: [
                {
                    name: "Мишка",
                    description: {
                        materials: "Шерсть",
                        weight: 54.21,
                        size: 12
                    },
                    price: 430
                },
                {
                    name: "Зайка",
                    description: {
                        materials: "Шерсть",
                        weight: 24.11,
                        size: 22
                    },
                    price: 390
                },
                {
                    name: "Коралина",
                    description: {
                        materials: "Акрил",
                        weight: 24.31,
                        size: 26
                    },
                    price: 670
                }],
            searchText: "",
            sortType: 0,
            filterPriceMin: "",
            filterPriceMax: "",
            filterMaterials: ""
        }
    },
    computed: {
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