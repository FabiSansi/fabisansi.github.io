// ============================================
// EDIT YOUR PROJECT DATA HERE
// ============================================
const projectsData = [
    {
        "title": "HR dashboard",
        "table": "people_analytics",
        "description": "A dashboard that tracks people analytics across the organization, highlighting gender and ethnicity distribution by role, total headcount by role and department, and employee job satisfaction levels.",
        "image": "./img/HR_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiZGRkYjAzNjAtMjYzMS00YTU2LThjYzItNDExMTYwOTc0MmJlIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Brazilian ecommerce dashboard",
        "table": "ecommerce_sales",
        "description": "This dashboard shows sales data, order information, and how well sellers are performing with their key numbers and results.",
        "image": "./img/brazilian_eccomerce.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiOTQ4MGE4M2QtNjQyYy00NzEzLWJjZjctZWVhYTQ0ZDVmZmEyIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Human Resources dashboard",
        "table": "workforce_diversity",
        "description": "This dashboard provides detailed information for Human Resources personnel regarding various workforce metrics, including total head count statistics, recent layoff data, comprehensive gender and racial diversity indicators, and essential employee information such as experience, performance, salary ranges, and departmental distributions.",
        "image": "./img/human_resorces.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiNjZiMzljMjktNGVjMS00ZjE5LTg1MTAtODllNTNlOTQ0MDA3IiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Customer Churn",
        "table": "customer_churn",
        "description": "This dashboard provides insights into customer churn by analyzing various factors such as customer demographics, subscription details, and service usage patterns. It highlights key metrics like churn rates, reasons for churn, and retention strategies to help businesses understand and mitigate customer attrition.",
        "image": "./img/Costumer_churn.jpg",
        "link": "https://app.powerbi.com/reportEmbed?reportId=5771c6c5-4024-4921-979b-a97a802f3336&autoAuth=true&ctid=7e93e286-b29a-4454-a41a-e8419ec9deb5"
    },
    {
        "title": "Call Center Dashboard",
        "table": "call_center_ops",
        "description": "This dashboard shows a weekly summary of call center performance. It tracks customer satisfaction, call information (like number of calls, how long they last, and how many issues get solved), and how well agents are performing individually. The dashboard uses charts and graphs to help quickly spot patterns and problems that need attention.",
        "image": "./img/callCenter_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiZWE2NWU0N2YtNmEyMy00ZWE3LWJjYjYtMjRkZDVkMGMwNzgzIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "Liquor dashboard",
        "table": "retail_liquor",
        "description": "This dashboard provides a comprehensive analysis of the liquor store's performance, offering detailed insights into various key metrics and business trends. It meticulously tracks profit margins across different product categories, monitors sales patterns over time, and documents the evolution of vendor.",
        "image": "./img/liquor_dashboard.jpg",
        "link": "https://app.powerbi.com/reportEmbed?reportId=96bf8838-d3a8-435f-8a64-968f580a9b70&autoAuth=true&ctid=7e93e286-b29a-4454-a41a-e8419ec9deb5"
    },
    {
        "title": "Spotfy Dashboard",
        "table": "music_streaming",
        "description": "This comprehensive dashboard presents various metrics and analytics about Spotify, featuring detailed visualizations of tracks categorized by streaming numbers and chronological release dates. The visualizations provide insights into music consumption patterns and popularity trends over time.",
        "image": "./img/spotfy_dashboard.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiMDRjYTY1NjctMWE4ZS00MGUwLTkyODktY2E5MjBmMmVmNTNmIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    },
    {
        "title": "New York subway dashboard",
        "table": "transit_ridership",
        "description": "This dashboard I crafted provides an interactive and customizable visual interface for comprehensive analysis of the New York subway system. It features detailed metrics including the total number of passenger trips, a complete inventory of stations throughout the five boroughs, and comprehensive data on train stops organized by subway lines.",
        "image": "./img/ny_subway.jpg",
        "link": "https://app.powerbi.com/view?r=eyJrIjoiNDVmNTU3MDYtZjdmMi00NGU0LTljNWEtYTNhY2EwMjRhYWNlIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9"
    }
];

// ============================================
// RENDER PROJECTS (DO NOT EDIT BELOW)
// ============================================
const projectContainer = document.getElementById('projects-container');

projectsData.forEach((project, index) => {
    const row = String(index + 1).padStart(2, '0');
    const cardHTML = `
                <div class="project-card">
                    <div class="card-image-wrapper">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-row mono">ROW ${row}</span>
                            <span class="card-table mono">table: ${project.table}</span>
                        </div>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-desc">${project.description}</p>
                        <a href="${project.link}" target="_blank" rel="noopener" class="card-btn">View project &rarr;</a>
                    </div>
                </div>
            `;
    projectContainer.insertAdjacentHTML('beforeend', cardHTML);
});

// ============================================
// MODAL (contact panel)
// ============================================
const modal = document.getElementById('modal');
const openTriggers = document.querySelectorAll('[data-open-modal]');
const closeTriggers = document.querySelectorAll('[data-close-modal]');
let lastFocused = null;

function openModal() {
    lastFocused = document.activeElement;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = modal.querySelector('[data-close-modal]');
    if (closeBtn) closeBtn.focus();
}

function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocused) lastFocused.focus();
}

openTriggers.forEach(btn => btn.addEventListener('click', openModal));
closeTriggers.forEach(btn => btn.addEventListener('click', closeModal));

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
});

// ============================================
// HERO QUERY TYPEWRITER
// ============================================
const queryText = "SELECT impact FROM career WHERE role = 'Data Analyst';";
const queryEl = document.getElementById('queryLine');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (queryEl) {
    if (prefersReducedMotion) {
        queryEl.textContent = queryText;
    } else {
        let i = 0;
        (function typeChar() {
            if (i <= queryText.length) {
                queryEl.textContent = queryText.slice(0, i);
                i++;
                setTimeout(typeChar, 28);
            }
        })();
    }
}

// ============================================
// STAT COUNT-UP ON SCROLL INTO VIEW
// ============================================
const statNumbers = document.querySelectorAll('.stat-number');

function formatStatValue(value, comma) {
    return comma ? value.toLocaleString('en-US') : String(value);
}

function animateStat(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const comma = el.dataset.comma === 'true';

    if (prefersReducedMotion) {
        el.textContent = formatStatValue(target, comma) + suffix;
        return;
    }

    const duration = 900;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = formatStatValue(current, comma) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStat(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    statNumbers.forEach(el => observer.observe(el));
} else {
    statNumbers.forEach(el => animateStat(el));
}
