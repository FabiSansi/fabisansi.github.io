// ============================================
// EDIT YOUR PROJECT DATA HERE
// ============================================
const projectsData = [
    {
        "title": "HR dashboard",
        "description": "A dashboard that tracks people analytics across the organization, highlighting gender and ethnicity distribution by role, total headcount by role and department, and employee job satisfaction levels.",
        "image": "./img/HR_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiZGRkYjAzNjAtMjYzMS00YTU2LThjYzItNDExMTYwOTc0MmJlIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Brazilian ecommerce dashboard",
        "description": "This dashboard shows sales data, order information, and how well sellers are performing with their key numbers and results.",
        "image": "./img/brazilian_eccomerce.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiOTQ4MGE4M2QtNjQyYy00NzEzLWJjZjctZWVhYTQ0ZDVmZmEyIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Human Resources dashboard",
        "description": "This dashboard provides detailed information for Human Resources personnel regarding various workforce metrics, including total head count statistics, recent layoff data, comprehensive gender and racial diversity indicators, and essential employee information such as experience, performance, salary ranges, and departmental distributions.",
        "image": "./img/human_resorces.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiNjZiMzljMjktNGVjMS00ZjE5LTg1MTAtODllNTNlOTQ0MDA3IiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Call Center Dashboard",
        "description": "This dashboard shows a weekly summary of call center performance. It tracks customer satisfaction, call information (like number of calls, how long they last, and how many issues get solved), and how well agents are performing individually. The dashboard uses charts and graphs to help quickly spot patterns and problems that need attention.",
        "image": "./img/callCenter_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiZWE2NWU0N2YtNmEyMy00ZWE3LWJjYjYtMjRkZDVkMGMwNzgzIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Liquor dashboard",
        "description": "This dashboard provides a comprehensive analysis of the liquor store's performance, offering detailed insights into various key metrics and business trends. It meticulously tracks profit margins across different product categories, monitors sales patterns over time, and documents the evolution of vendor.",
        "image": "./img/liquor_dashboard.jpg",
        "link": "https://app.powerbi.com/reportEmbed?reportId=96bf8838-d3a8-435f-8a64-968f580a9b70&autoAuth=true&ctid=7e93e286-b29a-4454-a41a-e8419ec9deb5"
    },
    {
        "title": "Spotfy Dashboard",
        "description": "This comprehensive dashboard presents various metrics and analytics about Spotify, featuring detailed visualizations of tracks categorized by streaming numbers and chronological release dates. The visualizations provide insights into music consumption patterns and popularity trends over time.",
        "image": "./img/spotfy_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiMDRjYTY1NjctMWE4ZS00MGUwLTkyODktY2E5MjBmMmVmNTNmIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "New York subway dashboard",
        "description": "This dashboard I crafted provides an interactive and customizable visual interface for comprehensive analysis of the New York subway system. It features detailed metrics including the total number of passenger trips, a complete inventory of stations throughout the five boroughs, and comprehensive data on train stops organized by subway lines.",
        "image": "./img/ny_subway.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiNDVmNTU3MDYtZjdmMi00NGU0LTljNWEtYTNhY2EwMjRhYWNlIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    }
];

// ============================================
// RENDER LOGIC (DO NOT EDIT BELOW)
// ============================================
const projectContainer = document.getElementById('projects-container');

projectsData.forEach(project => {
    const cardHTML = `
                <div class="project-card">
                    <div class="card-image-wrapper">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-desc">${project.description}</p>
                        <a href="${project.link}" target="_blank" class="card-btn">View Project</a>
                    </div>
                </div>
            `;
    projectContainer.insertAdjacentHTML('beforeend', cardHTML);
});


const modal = document.getElementById('modal');
    const launchBtn = document.getElementById('launchBtn');
    const closeButtons = document.querySelectorAll('[data-dismiss="modal"]');

    // Open Modal
    launchBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // Close Modal (clicking X or Close button)
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });

    // Close when clicking outside the box
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.remove('show');
        }
    });