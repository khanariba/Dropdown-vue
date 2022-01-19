<template>
<div class="dropdown" v-if="options">
    <!-- Dropdown Input -->
    <input class="dropdown-input" :name="name" :id="id" @focus="showOptions()" @blur="exit()" @keyup="keyMonitor" v-model="searchFilter" :placeholder="placeholder" />

    <!-- Dropdown Menu -->
    <div class="dropdown-content" v-show="optionsShown">
        <div class="dropdown-item" @mousedown="selectOption(options)" v-for="(options, index) in filteredOptions" :key="index">
            {{ options.name || options.id || "-" }}
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: false,
            default: 'dropdown',
        },

        placeholder: {
            type: String,
            required: false,
            default: 'Select a User',
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        maxItem: {
            type: Number,
            required: false,
            default: 5,
        }
    },
    data() {
        return {

            options: [{
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                        "street": "Douglas Extension",
                        "suite": "Suite 847",
                        "city": "McKenziehaven",
                        "zipcode": "59590-4157",
                        "geo": {
                            "lat": "-68.6102",
                            "lng": "-47.0653"
                        }
                    },
                    "phone": "1-463-123-4447",
                    "website": "ramiro.info",
                    "company": {
                        "name": "Romaguera-Jacobson",
                        "catchPhrase": "Face to face bifurcated interface",
                        "bs": "e-enable strategic applications"
                    }
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "address": {
                        "street": "Hoeger Mall",
                        "suite": "Apt. 692",
                        "city": "South Elvis",
                        "zipcode": "53919-4257",
                        "geo": {
                            "lat": "29.4572",
                            "lng": "-164.2990"
                        }
                    },
                    "phone": "493-170-9623 x156",
                    "website": "kale.biz",
                    "company": {
                        "name": "Robel-Corkery",
                        "catchPhrase": "Multi-tiered zero tolerance productivity",
                        "bs": "transition cutting-edge web services"
                    }
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "address": {
                        "street": "Skiles Walks",
                        "suite": "Suite 351",
                        "city": "Roscoeview",
                        "zipcode": "33263",
                        "geo": {
                            "lat": "-31.8129",
                            "lng": "62.5342"
                        }
                    },
                    "phone": "(254)954-1289",
                    "website": "demarco.info",
                    "company": {
                        "name": "Keebler LLC",
                        "catchPhrase": "User-centric fault-tolerant solution",
                        "bs": "revolutionize end-to-end systems"
                    }
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "address": {
                        "street": "Norberto Crossing",
                        "suite": "Apt. 950",
                        "city": "South Christy",
                        "zipcode": "23505-1337",
                        "geo": {
                            "lat": "-71.4197",
                            "lng": "71.7478"
                        }
                    },
                    "phone": "1-477-935-8478 x6430",
                    "website": "ola.org",
                    "company": {
                        "name": "Considine-Lockman",
                        "catchPhrase": "Synchronised bottom-line interface",
                        "bs": "e-enable innovative applications"
                    }
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "address": {
                        "street": "Rex Trail",
                        "suite": "Suite 280",
                        "city": "Howemouth",
                        "zipcode": "58804-1099",
                        "geo": {
                            "lat": "24.8918",
                            "lng": "21.8984"
                        }
                    },
                    "phone": "210.067.6132",
                    "website": "elvis.io",
                    "company": {
                        "name": "Johns Group",
                        "catchPhrase": "Configurable multimedia task-force",
                        "bs": "generate enterprise e-tailers"
                    }
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "address": {
                        "street": "Ellsworth Summit",
                        "suite": "Suite 729",
                        "city": "Aliyaview",
                        "zipcode": "45169",
                        "geo": {
                            "lat": "-14.3990",
                            "lng": "-120.7677"
                        }
                    },
                    "phone": "586.493.6943 x140",
                    "website": "jacynthe.com",
                    "company": {
                        "name": "Abernathy Group",
                        "catchPhrase": "Implemented secondary concept",
                        "bs": "e-enable extensible e-tailers"
                    }
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "address": {
                        "street": "Dayna Park",
                        "suite": "Suite 449",
                        "city": "Bartholomebury",
                        "zipcode": "76495-3109",
                        "geo": {
                            "lat": "24.6463",
                            "lng": "-168.8889"
                        }
                    },
                    "phone": "(775)976-6794 x41206",
                    "website": "conrad.com",
                    "company": {
                        "name": "Yost and Sons",
                        "catchPhrase": "Switchable contextually-based project",
                        "bs": "aggregate real-time technologies"
                    }
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "address": {
                        "street": "Kattie Turnpike",
                        "suite": "Suite 198",
                        "city": "Lebsackbury",
                        "zipcode": "31428-2261",
                        "geo": {
                            "lat": "-38.2386",
                            "lng": "57.2232"
                        }
                    },
                    "phone": "024-648-3804",
                    "website": "ambrose.net",
                    "company": {
                        "name": "Hoeger LLC",
                        "catchPhrase": "Centralized empowering task-force",
                        "bs": "target end-to-end models"
                    }
                }
            ],
            optionsShown: false,
            searchFilter: "",

        };

    },
    created() {
        this.$emit("selected", this.selected);
    },
    computed: {
        filteredOptions() {
            const filtered = [];
            const regOption = new RegExp(this.searchFilter, "ig");
            for (const option of this.options) {
                if (this.searchFilter.length < 1 || option.name.match(regOption)) {
                    if (filtered.length < this.maxItem) filtered.push(option);
                }
            }
            return filtered;
        },
    },
    methods: {
        selectOption(option) {

            this.selected = option;
            this.optionsShown = false;
            this.searchFilter = this.selected.name;
            this.$emit("selected", this.selected);
        },
        showOptions() {
            if (!this.disabled) {
                this.searchFilter = "";
                this.optionsShown = true;
            }
        },
        exit() {
            if (!this.selected.id) {
                this.selected = {};
                this.searchFilter = "";
            } else {
                this.searchFilter = this.selected.name;
            }
            this.$emit("selected", this.selected);
            this.optionsShown = false;
        },
        keyMonitor: function (event) {
            if (event.key === "Enter" && this.filteredOptions[0])
                this.selectOption(null);
            // else if (event.key === "down" && this.filteredOptions[0])
            //     this.selectOption(this.filteredOptions[0]);
        },
    },
    watch: {
        searchFilter() {
            if (this.filteredOptions.length === 0) {
                this.selected = {};
            } else {
                this.selected = this.filteredOptions[0];
            }
            this.$emit("filter", this.searchFilter);
        },
    },
};
</script>

<style>
.dropdown {
    position: relative;
    display: block;
    margin-left: 50px;
    margin-top: 50px;
    /* margin: auto; */
}

.dropdown-input {
    background: #fff;
    cursor: pointer;
    border: 2px solid #082f76;
    border-radius: 20px;
    color: #333;
    display: block;
   font-size: 1em;
    padding: 12px;
    min-width: 300px;
    max-width: 300px;
}
.dropdown-input:hover{
     background: #fff;
    cursor: pointer;
    border: 2px solid #ce0d0d;
    border-radius: 20px;
}
.dropdown-content {
   position: absolute;
    background-color: #082f76;
    min-width: 280px;
    max-width: 248px;
    max-height: 248px;
    /* border: 1px solid #e7ecf5; */
    box-shadow: 0px -8px 34px 0px rgb(0 0 0 / 5%);
    overflow: auto;
    z-index: 1;
    margin-left: 24px;
    /* padding-top: 10px; */
}

.dropdown-item {
   color: #ffffff;
    font-size: 0.9em;
    line-height: 1.1em;
    padding: 8px;
    text-decoration: none;
    display: block;
    cursor: pointer;
}

.dropdown:hover .dropdowncontent {
    display: block;
}
</style>
