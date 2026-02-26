// Ownly Marketplace - Search and Filter Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const searchInput = document.querySelector('.marketplace-search input[type="search"]');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const allAppCards = document.querySelectorAll('.app-card, .app-card-featured');
    const appGrids = document.querySelectorAll('.app-grid, .app-grid-featured');

    // State
    let activeCategory = 'all';
    let searchQuery = '';

    // Filter apps based on current state
    function filterApps() {
        let visibleCount = 0;

        allAppCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardName = card.getAttribute('data-name');
            const cardAuthor = card.getAttribute('data-author');
            const cardDescription = card.getAttribute('data-description');

            // Category filter check
            const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;

            // Search filter check
            const searchLower = searchQuery.toLowerCase();
            const searchMatch = searchQuery === '' ||
                cardName.includes(searchLower) ||
                cardAuthor.includes(searchLower) ||
                cardDescription.includes(searchLower);

            // Show/hide based on both filters
            if (categoryMatch && searchMatch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide empty state
        updateEmptyState(visibleCount);
    }

    // Update empty state message
    function updateEmptyState(visibleCount) {
        // Remove existing empty state if present
        const existingEmptyState = document.querySelector('.marketplace-empty-state');
        if (existingEmptyState) {
            existingEmptyState.remove();
        }

        // Add empty state if no results
        if (visibleCount === 0) {
            appGrids.forEach(grid => {
                if (grid.querySelector('.app-card, .app-card-featured')) {
                    const emptyState = document.createElement('div');
                    emptyState.className = 'marketplace-empty-state';
                    emptyState.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" stroke="#6F7895" stroke-width="2"/>
                            <path d="M16 16L20 20" stroke="#6F7895" stroke-width="2" stroke-linecap="round"/>
                            <path d="M8 11H14M11 8V14" stroke="#6F7895" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <h3>No apps found</h3>
                        <p>Try adjusting your search or filter to find what you're looking for.</p>
                    `;
                    grid.parentElement.insertBefore(emptyState, grid);
                    return; // Only show once
                }
            });
        }
    }

    // Real-time search functionality
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterApps();
    });

    // Category filter click handlers
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active state
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Get category from button text
            const categoryText = filter.textContent.trim().split('\n')[0].trim();

            // Map display text to data-category values
            const categoryMap = {
                'All Applications': 'all',
                'Productivity': 'productivity',
                'CMS & Blogs': 'cms-blogs',
                'Analytics': 'analytics',
                'Databases': 'databases',
                'Developer Tools': 'developer-tools',
                'Security': 'security'
            };

            activeCategory = categoryMap[categoryText] || 'all';
            filterApps();
        });
    });

    // Initialize - show all apps
    filterApps();
});
