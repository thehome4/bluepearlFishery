// CSV Data URLs
        const CSV_URLS = {
            fishes: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtgs54aDoQ7pQvdfHcFb6sJnRCcy7OpOUwu8-pH7HaNBKxL6meCTHq44KVA9FePDu2n9GyE3_qiBQm/pub?gid=0&single=true&output=csv',
            accessories: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSe-Kkwq6B0_TYPH0H42mgmoB5XrzqIL4rsgaD7DXqiG7cnlV5dDzyr3tLDup02MH3nGlLZAqtlDqrZ/pub?gid=0&single=true&output=csv',
            packages: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSbM0FTRiQBvGY4o7iamTH8wE8UXjL4qy6W4MsiaYe6ZoMlC9G1gKqABqgRSienssw9JVWc8g8hsriP/pub?gid=0&single=true&output=csv',
            showcase: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQjL0Iz3FHJIcK3vXybPAel5cV2JFEW2tyidyM3sMhgI21TQJWRRkwgGIQdTPB11M3hnE5VQluCnmL9/pub?gid=0&single=true&output=csv'
        };

        // Global data storage
        let appData = {
            fishes: [],
            accessories: [],
            packages: [],
            showcase: []
        };

        // Navigation Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pageSections = document.querySelectorAll('.page-section');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navMenu = document.querySelector('nav ul');
            
            // View All buttons
            const viewAllFishes = document.getElementById('viewAllFishes');
            const viewAllAccessories = document.getElementById('viewAllAccessories');
            const viewAllPackages = document.getElementById('viewAllPackages');
            
            // Contact form
            const contactForm = document.getElementById('contactForm');
            
            // Slider navigation
            const sliderNavs = document.querySelectorAll('.slider-nav');
            
            // Load data from CSV files
            loadCSVData();
            
            // Navigation functionality
            function showPage(pageId) {
                pageSections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(pageId).classList.add('active');
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('data-page');
                    if (pageId) {
                        showPage(pageId);
                        
                        // Close mobile menu if open
                        navMenu.classList.remove('show');
                    }
                });
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('show');
                // Also toggle mobile search bar when menu is open
                const mobileSearch = document.querySelector('.search-bar-mobile');
                if (navMenu.classList.contains('show')) {
                    mobileSearch.style.display = 'block';
                } else {
                    mobileSearch.style.display = 'none';
                }
            });
            
            // Slider navigation
            sliderNavs.forEach(nav => {
                nav.addEventListener('click', function() {
                    const isLeft = this.classList.contains('left-nav');
                    const slider = this.parentElement.querySelector('.products-slider');
                    const scrollAmount = 300;
                    
                    if (isLeft) {
                        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                });
            });
            
        // View All functionality - UPDATED
        viewAllFishes.addEventListener('click', function(e) {
            e.preventDefault();
            const sliderContainer = document.getElementById('fishesSlider').parentElement;
            const grid = document.getElementById('fishesGrid');
            
            // Hide slider container and show grid
            sliderContainer.classList.add('hidden');
            grid.classList.add('active');
            
            // Populate grid if empty
            if (grid.children.length === 0) {
                renderProducts('fishes', grid);
            }
            
            this.style.display = 'none';
        });
        
        viewAllAccessories.addEventListener('click', function(e) {
            e.preventDefault();
            const sliderContainer = document.getElementById('accessoriesSlider').parentElement;
            const grid = document.getElementById('accessoriesGrid');
            
            // Hide slider container and show grid
            sliderContainer.classList.add('hidden');
            grid.classList.add('active');
            
            // Populate grid if empty
            if (grid.children.length === 0) {
                renderProducts('accessories', grid);
            }
            
            this.style.display = 'none';
        });
        
        viewAllPackages.addEventListener('click', function(e) {
            e.preventDefault();
            const sliderContainer = document.getElementById('packagesSlider').parentElement;
            const grid = document.getElementById('packagesGrid');
            
            // Hide slider container and show grid
            sliderContainer.classList.add('hidden');
            grid.classList.add('active');
            
            // Populate grid if empty
            if (grid.children.length === 0) {
                renderProducts('packages', grid);
            }
            
            this.style.display = 'none';
        });
        //updated Done
            
            viewAllAccessories.addEventListener('click', function(e) {
                e.preventDefault();
                const slider = document.getElementById('accessoriesSlider');
                const grid = document.getElementById('accessoriesGrid');
                const sliderContainer = slider.parentElement;
                
                sliderContainer.classList.add('hidden');
                grid.classList.add('active');
                
                // Populate grid if empty
                if (grid.children.length === 0) {
                    renderProducts('accessories', grid);
                }
                
                this.style.display = 'none';
            });
            
            viewAllPackages.addEventListener('click', function(e) {
                e.preventDefault();
                const slider = document.getElementById('packagesSlider');
                const grid = document.getElementById('packagesGrid');
                const sliderContainer = slider.parentElement;
                
                sliderContainer.classList.add('hidden');
                grid.classList.add('active');
                
                // Populate grid if empty
                if (grid.children.length === 0) {
                    renderProducts('packages', grid);
                }
                
                this.style.display = 'none';
            });
            
            // Contact form submission
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('contactName').value;
                const phone = document.getElementById('contactPhone').value;
                const message = document.getElementById('contactMessage').value;
                
                const whatsappUrl = `https://wa.me/8801673064324?text=Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
                
                window.open(whatsappUrl, '_blank');
            });
            
            // Search functionality
            const searchInput = document.getElementById('searchInput');
            const searchInputMobile = document.getElementById('searchInputMobile');
            
            function handleSearch() {
                const searchTerm = this.value.toLowerCase().trim();
                
                if (searchTerm.length < 2) return;
                
                // Show fishes page as default search results
                showPage('fishes');
                
                // Filter products based on search term
                const filteredFishes = appData.fishes.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                
                const filteredAccessories = appData.accessories.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                
                const filteredPackages = appData.packages.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                
                // Combine all results
                const allResults = [...filteredFishes, ...filteredAccessories, ...filteredPackages];
                
                // Display search results
                const resultsContainer = document.getElementById('fishesGrid');
                resultsContainer.innerHTML = '';
                
                if (allResults.length === 0) {
                    resultsContainer.innerHTML = '<p class="no-results">No products found matching your search.</p>';
                } else {
                    allResults.forEach(product => {
                        const productCard = createProductCard(product, product.category || 'fishes');
                        resultsContainer.appendChild(productCard);
                    });
                }
                
                // Show grid view
                document.getElementById('fishesSlider').parentElement.classList.add('hidden');
                resultsContainer.classList.add('active');
                document.getElementById('viewAllFishes').style.display = 'none';
            }
            
            searchInput.addEventListener('keyup', handleSearch);
            if (searchInputMobile) {
                searchInputMobile.addEventListener('keyup', handleSearch);
            }
        });

        // Load CSV data
        async function loadCSVData() {
            try {
                // Load all CSV data
                await Promise.all([
                    loadCSV(CSV_URLS.fishes, 'fishes'),
                    loadCSV(CSV_URLS.accessories, 'accessories'),
                    loadCSV(CSV_URLS.packages, 'packages'),
                    loadCSV(CSV_URLS.showcase, 'showcase')
                ]);
                
                // Render data
                renderProducts('fishes', document.getElementById('fishesSlider'));
                renderProducts('accessories', document.getElementById('accessoriesSlider'));
                renderProducts('packages', document.getElementById('packagesSlider'));
                renderShowcases('showcase', document.getElementById('showcaseContainer'));
                renderShowcases('showcase', document.getElementById('homeShowcaseContainer'), 3); // Only 3 for home page
                
            } catch (error) {
                console.error('Error loading CSV data:', error);
            }
        }

        // Load CSV from URL
        async function loadCSV(url, dataKey) {
            try {
                const response = await fetch(url);
                const csvData = await response.text();
                appData[dataKey] = parseCSV(csvData);
                
                // Add category info for products
                if (dataKey !== 'showcase') {
                    appData[dataKey].forEach(item => {
                        item.category = dataKey;
                    });
                }
            } catch (error) {
                console.error(`Error loading ${dataKey} CSV:`, error);
            }
        }

        // Parse CSV text to JSON
        function parseCSV(csvText) {
            const lines = csvText.split('\n');
            const headers = lines[0].split(',').map(header => header.trim());
            
            const data = [];
            for (let i = 1; i < lines.length; i++) {
                const currentLine = lines[i].split(',').map(item => item.trim());
                if (currentLine.length === headers.length && currentLine[0] !== '') {
                    let item = {};
                    for (let j = 0; j < headers.length; j++) {
                        item[headers[j]] = currentLine[j];
                    }
                    data.push(item);
                }
            }
            
            return data;
        }

        // Render products
        function renderProducts(category, container, limit = null) {
            // Clear loading indicator
            if (container.innerHTML.includes('loader')) {
                container.innerHTML = '';
            }
            
            const products = limit ? appData[category].slice(0, limit) : appData[category];
            
            if (products.length === 0) {
                container.innerHTML = '<p>No products available at the moment.</p>';
                return;
            }
            
            products.forEach(product => {
                const productCard = createProductCard(product, category);
                container.appendChild(productCard);
            });
        }

        // Create product card
        function createProductCard(product, category) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-id', product.id || Math.random());
            card.setAttribute('data-category', category);
            
            card.innerHTML = `
                <div class="product-img">
                    <img src="${product.image || 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}" alt="${product.name}">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="price">${product.price} BDT/piece</span>
                        ${product.discount ? `<span class="discount">${product.discount}% off</span>` : ''}
                    </div>
                    <p>${product.description ? product.description.substring(0, 60) + '...' : ''}</p>
                </div>
            `;
            
            // Add click event to show product details
            card.addEventListener('click', function() {
                showProductModal(product, category);
            });
            
            return card;
        }

        // Render showcases
        function renderShowcases(category, container, limit = null) {
            // Clear loading indicator
            if (container.innerHTML.includes('loader')) {
                container.innerHTML = '';
            }
            
            const showcases = limit ? appData[category].slice(0, limit) : appData[category];
            
            if (showcases.length === 0) {
                container.innerHTML = '<p>No showcases available at the moment.</p>';
                return;
            }
            
            showcases.forEach((showcase, index) => {
                const showcaseItem = document.createElement('div');
                showcaseItem.className = 'showcase-item';
                showcaseItem.setAttribute('data-id', index);
                
                showcaseItem.innerHTML = `
                    <img src="${showcase.image || 'https://images.unsplash.com/photo-1594946606675-0c7a3505d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}" alt="${showcase.title}">
                    <div class="showcase-overlay">
                        <h3>${showcase.title}</h3>
                        <p>${showcase.description ? showcase.description.substring(0, 60) + '...' : ''}</p>
                    </div>
                `;
                
                // Add click event to show showcase details
                showcaseItem.addEventListener('click', function() {
                    showShowcaseModal(showcase);
                });
                
                container.appendChild(showcaseItem);
            });
        }

        // Show product modal
        function showProductModal(product, category) {
            const modal = document.getElementById('productModal');
            const modalImg = document.getElementById('modal-img');
            const modalTitle = document.getElementById('modal-title');
            const modalPrice = document.getElementById('modal-price');
            const modalDiscount = document.getElementById('modal-discount');
            const modalSize = document.getElementById('modal-size');
            const modalSizeContainer = document.getElementById('modal-size-container');
            const modalDescription = document.getElementById('modal-description');
            const modalWhatsapp = document.getElementById('modal-whatsapp');
            
            modalImg.src = product.image || 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
            modalTitle.textContent = product.name;
            modalPrice.textContent = `${product.price} BDT/piece`;
            modalDiscount.textContent = product.discount ? `${product.discount}% off` : '';
            modalDescription.textContent = product.description || 'No description available.';
            
            // Show size only for fish products
            if (category === 'fishes' && product.size) {
                modalSize.textContent = product.size;
                modalSizeContainer.style.display = 'block';
            } else {
                modalSizeContainer.style.display = 'none';
            }
            
            // Set up WhatsApp link
            const message = `Hello! I'm interested in ${product.name} (${product.discount ? `${product.discount}% discount` : ''}). Price: ${product.price} BDT/piece.`;
            modalWhatsapp.href = `https://wa.me/8801673064324?text=${encodeURIComponent(message)}`;
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Show showcase modal
        function showShowcaseModal(showcase) {
            const modal = document.getElementById('showcaseModal');
            const modalImg = document.getElementById('modal-showcase-img');
            const modalTitle = document.getElementById('modal-showcase-title');
            const modalDescription = document.getElementById('modal-showcase-description');
            
            modalImg.src = showcase.image || 'https://images.unsplash.com/photo-1594946606675-0c7a3505d271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
            modalTitle.textContent = showcase.title;
            modalDescription.textContent = showcase.description || 'No description available.';
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Close modals
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('show');
                });
                document.body.style.overflow = 'auto';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('show');
                });
                document.body.style.overflow = 'auto';
            }
        });