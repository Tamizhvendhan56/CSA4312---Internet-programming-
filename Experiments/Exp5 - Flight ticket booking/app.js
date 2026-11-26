/* ==========================================================================
   SkyBook - Flight Booking Engine & State Controller
   ========================================================================== */

// --- Default Flights Database ---
const DEFAULT_FLIGHTS = [
  {
    id: 1,
    airline: "Air India",
    flightNo: "AI-501",
    airlineCode: "AI",
    from: "Chennai (MAA)",
    fromCity: "Chennai",
    fromCode: "MAA",
    to: "Delhi (DEL)",
    toCity: "Delhi",
    toCode: "DEL",
    depTime: "06:30 AM",
    arrTime: "09:15 AM",
    duration: "2h 45m",
    durationMins: 165,
    stops: 0,
    price: 5400,
    aircraft: "Boeing 787-8 Dreamliner",
    terminal: "T2",
    gate: "14B",
    rating: 4.6
  },
  {
    id: 2,
    airline: "IndiGo",
    flightNo: "6E-203",
    airlineCode: "6E",
    from: "Chennai (MAA)",
    fromCity: "Chennai",
    fromCode: "MAA",
    to: "Mumbai (BOM)",
    toCity: "Mumbai",
    toCode: "BOM",
    depTime: "09:15 AM",
    arrTime: "11:15 AM",
    duration: "2h 00m",
    durationMins: 120,
    stops: 0,
    price: 4200,
    aircraft: "Airbus A321neo",
    terminal: "T1",
    gate: "08A",
    rating: 4.4
  },
  {
    id: 3,
    airline: "Vistara",
    flightNo: "UK-811",
    airlineCode: "UK",
    from: "Bangalore (BLR)",
    fromCity: "Bangalore",
    fromCode: "BLR",
    to: "Delhi (DEL)",
    toCity: "Delhi",
    toCode: "DEL",
    depTime: "11:00 AM",
    arrTime: "01:45 PM",
    duration: "2h 45m",
    durationMins: 165,
    stops: 0,
    price: 6200,
    aircraft: "Airbus A320neo",
    terminal: "T2",
    gate: "22C",
    rating: 4.8
  },
  {
    id: 4,
    airline: "Air India Express",
    flightNo: "IX-456",
    airlineCode: "IX",
    from: "Hyderabad (HYD)",
    fromCity: "Hyderabad",
    fromCode: "HYD",
    to: "Chennai (MAA)",
    toCity: "Chennai",
    toCode: "MAA",
    depTime: "02:30 PM",
    arrTime: "03:45 PM",
    duration: "1h 15m",
    durationMins: 75,
    stops: 0,
    price: 3500,
    aircraft: "Boeing 737-800",
    terminal: "T1",
    gate: "05D",
    rating: 4.2
  },
  {
    id: 5,
    airline: "Emirates",
    flightNo: "EK-500",
    airlineCode: "EK",
    from: "Mumbai (BOM)",
    fromCity: "Mumbai",
    fromCode: "BOM",
    to: "Dubai (DXB)",
    toCity: "Dubai",
    toCode: "DXB",
    depTime: "04:15 PM",
    arrTime: "06:00 PM",
    duration: "3h 15m",
    durationMins: 195,
    stops: 0,
    price: 18500,
    aircraft: "Boeing 777-300ER",
    terminal: "T2",
    gate: "41A",
    rating: 4.9
  },
  {
    id: 6,
    airline: "Singapore Airlines",
    flightNo: "SQ-402",
    airlineCode: "SQ",
    from: "Delhi (DEL)",
    fromCity: "Delhi",
    fromCode: "DEL",
    to: "Singapore (SIN)",
    toCity: "Singapore",
    toCode: "SIN",
    depTime: "10:10 PM",
    arrTime: "06:30 AM",
    duration: "5h 50m",
    durationMins: 350,
    stops: 0,
    price: 24800,
    aircraft: "Airbus A350-900",
    terminal: "T3",
    gate: "19",
    rating: 4.9
  },
  {
    id: 7,
    airline: "British Airways",
    flightNo: "BA-118",
    airlineCode: "BA",
    from: "Bangalore (BLR)",
    fromCity: "Bangalore",
    fromCode: "BLR",
    to: "London (LHR)",
    toCity: "London",
    toCode: "LHR",
    depTime: "07:00 AM",
    arrTime: "01:25 PM",
    duration: "10h 55m",
    durationMins: 655,
    stops: 0,
    price: 46200,
    aircraft: "Boeing 787-9",
    terminal: "T2",
    gate: "31B",
    rating: 4.7
  },
  {
    id: 8,
    airline: "IndiGo",
    flightNo: "6E-902",
    airlineCode: "6E",
    from: "Delhi (DEL)",
    fromCity: "Delhi",
    fromCode: "DEL",
    to: "Mumbai (BOM)",
    toCity: "Mumbai",
    toCode: "BOM",
    depTime: "08:00 AM",
    arrTime: "10:15 AM",
    duration: "2h 15m",
    durationMins: 135,
    stops: 0,
    price: 4750,
    aircraft: "Airbus A320neo",
    terminal: "T1",
    gate: "12A",
    rating: 4.3
  },
  {
    id: 9,
    airline: "Akasa Air",
    flightNo: "QP-1301",
    airlineCode: "QP",
    from: "Mumbai (BOM)",
    fromCity: "Mumbai",
    fromCode: "BOM",
    to: "Bangalore (BLR)",
    toCity: "Bangalore",
    toCode: "BLR",
    depTime: "01:30 PM",
    arrTime: "03:10 PM",
    duration: "1h 40m",
    durationMins: 100,
    stops: 0,
    price: 3890,
    aircraft: "Boeing 737 MAX 8",
    terminal: "T1",
    gate: "04C",
    rating: 4.5
  },
  {
    id: 10,
    airline: "Air India",
    flightNo: "AI-101",
    airlineCode: "AI",
    from: "Delhi (DEL)",
    fromCity: "Delhi",
    fromCode: "DEL",
    to: "New York (JFK)",
    toCity: "New York",
    toCode: "JFK",
    depTime: "02:20 AM",
    arrTime: "07:35 AM",
    duration: "15h 45m",
    durationMins: 945,
    stops: 0,
    price: 68500,
    aircraft: "Boeing 777-200LR",
    terminal: "T3",
    gate: "28",
    rating: 4.6
  },
  {
    id: 11,
    airline: "Qatar Airways",
    flightNo: "QR-557",
    airlineCode: "QR",
    from: "Hyderabad (HYD)",
    fromCity: "Hyderabad",
    fromCode: "HYD",
    to: "London (LHR)",
    toCity: "London",
    toCode: "LHR",
    depTime: "03:55 AM",
    arrTime: "12:40 PM",
    duration: "12h 15m",
    durationMins: 735,
    stops: 1,
    price: 49900,
    aircraft: "Airbus A350-1000",
    terminal: "T1",
    gate: "16",
    rating: 4.9
  },
  {
    id: 12,
    airline: "SpiceJet",
    flightNo: "SG-814",
    airlineCode: "SG",
    from: "Chennai (MAA)",
    fromCity: "Chennai",
    fromCode: "MAA",
    to: "Delhi (DEL)",
    toCity: "Delhi",
    toCode: "DEL",
    depTime: "05:40 PM",
    arrTime: "08:35 PM",
    duration: "2h 55m",
    durationMins: 175,
    stops: 0,
    price: 4890,
    aircraft: "Boeing 737-800",
    terminal: "T1",
    gate: "09",
    rating: 4.1
  }
];

// --- Currencies & Rates ---
const CURRENCIES = {
  INR: { symbol: "₹", rate: 1, name: "Indian Rupee" },
  USD: { symbol: "$", rate: 0.012, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.011, name: "Euro" },
  GBP: { symbol: "£", rate: 0.0094, name: "British Pound" },
  AED: { symbol: "AED ", rate: 0.044, name: "UAE Dirham" }
};

// --- Promo Coupons ---
const COUPONS = {
  SKYFLY20: { discountPercent: 20, description: "20% Discount" },
  FIRSTFLY: { discountFlat: 500, description: "₹500 Instant Discount" },
  FESTIVE: { discountPercent: 15, description: "15% Festive Saver" },
  WINGS1000: { discountFlat: 1000, description: "₹1,000 Luxury Flight Savings" }
};

// --- App State ---
let flights = JSON.parse(localStorage.getItem("skyFlights_v2")) || DEFAULT_FLIGHTS;
let bookings = JSON.parse(localStorage.getItem("skyBookings_v2")) || [];
let activeCurrency = localStorage.getItem("skyCurrency") || "INR";
let activeTheme = localStorage.getItem("skyTheme") || "light";

// Active Booking State Wizard
let wizardState = {
  step: 1,
  flight: null,
  tripType: "oneway",
  cabinClass: "economy",
  classMultiplier: 1,
  passengerCount: 1,
  passengers: [],
  selectedSeats: {},
  addons: {
    insurance: false,
    extraBaggage: 0,
    meal: false,
    priority: false
  },
  appliedCoupon: null,
  totals: {
    baseFare: 0,
    seatFees: 0,
    addonsFee: 0,
    taxes: 0,
    discount: 0,
    grandTotal: 0
  }
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCurrencies();
  initDates();
  initSearchAutocomplete();
  renderDeals();
  updateStatsCounters();
  
  // Set default view
  const hash = window.location.hash.replace("#", "") || "home";
  showPage(hash);
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeIcon();
}

function toggleTheme() {
  activeTheme = activeTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", activeTheme);
  localStorage.setItem("skyTheme", activeTheme);
  updateThemeIcon();
  showToast("info", "Theme Changed", `Switched to ${activeTheme.toUpperCase()} mode.`);
}

function updateThemeIcon() {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.className = activeTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

// --- Currency Management ---
function initCurrencies() {
  const select = document.getElementById("currencySelector");
  if (!select) return;
  select.value = activeCurrency;
  select.addEventListener("change", (e) => {
    activeCurrency = e.target.value;
    localStorage.setItem("skyCurrency", activeCurrency);
    showToast("info", "Currency Updated", `Displaying prices in ${activeCurrency}.`);
    // Re-render components that show pricing
    if (document.getElementById("search").classList.contains("active")) {
      filterAndRenderFlights();
    }
    if (document.getElementById("bookings").classList.contains("active")) {
      loadBookings();
    }
    if (document.getElementById("admin").classList.contains("active")) {
      loadAdmin();
    }
    renderDeals();
    if (wizardState.flight) {
      calculateWizardTotals();
      renderCheckoutBreakdown();
    }
  });
}

function formatPrice(amountInINR) {
  const curr = CURRENCIES[activeCurrency] || CURRENCIES.INR;
  const converted = Math.round(amountInINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// --- Date helpers ---
function initDates() {
  const today = new Date().toISOString().split("T")[0];
  const homeDep = document.getElementById("homeDate");
  const homeRet = document.getElementById("homeReturnDate");
  const searchDep = document.getElementById("searchDate");
  
  if (homeDep) homeDep.value = today;
  if (searchDep) searchDep.value = today;

  // Next week for return default
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  if (homeRet) homeRet.value = nextWeek.toISOString().split("T")[0];
}

function setTripType(type) {
  wizardState.tripType = type;
  document.querySelectorAll(".trip-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });

  const returnBox = document.getElementById("returnDateBox");
  if (returnBox) {
    returnBox.style.display = type === "roundtrip" ? "block" : "none";
  }
}

function swapRoutes() {
  const fromEl = document.getElementById("homeFrom");
  const toEl = document.getElementById("homeTo");
  if (fromEl && toEl) {
    const temp = fromEl.value;
    fromEl.value = toEl.value;
    toEl.value = temp;
    showToast("info", "Route Swapped", `${fromEl.value} ⇄ ${toEl.value}`);
  }
}

// --- Page Navigation ---
function showPage(pageId) {
  const validPages = ["home", "search", "tracker", "bookings", "admin"];
  if (!validPages.includes(pageId)) pageId = "home";

  document.querySelectorAll(".page-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === pageId);
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
  }

  window.location.hash = pageId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "search") {
    filterAndRenderFlights();
  } else if (pageId === "bookings") {
    loadBookings();
  } else if (pageId === "admin") {
    loadAdmin();
  }
}

// --- Trending Deals Generator ---
const DEALS_DATA = [
  {
    city: "Dubai",
    code: "DXB",
    country: "UAE",
    price: 18500,
    tag: "Luxury Getaway",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
    from: "Mumbai (BOM)",
    to: "Dubai (DXB)"
  },
  {
    city: "Singapore",
    code: "SIN",
    country: "Singapore",
    price: 24800,
    tag: "Garden City",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80",
    from: "Delhi (DEL)",
    to: "Singapore (SIN)"
  },
  {
    city: "London",
    code: "LHR",
    country: "United Kingdom",
    price: 46200,
    tag: "Historic Metropolis",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
    from: "Bangalore (BLR)",
    to: "London (LHR)"
  },
  {
    city: "New York",
    code: "JFK",
    country: "United States",
    price: 68500,
    tag: "The Big Apple",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80",
    from: "Delhi (DEL)",
    to: "New York (JFK)"
  }
];

function renderDeals() {
  const container = document.getElementById("trendingDealsGrid");
  if (!container) return;

  container.innerHTML = DEALS_DATA.map(deal => `
    <div class="deal-card" onclick="quickBookDeal('${deal.from}', '${deal.to}')">
      <div class="deal-image-container">
        <img src="${deal.image}" alt="${deal.city}" loading="lazy">
        <span class="deal-tag">${deal.tag}</span>
        <span class="deal-price-badge">From ${formatPrice(deal.price)}</span>
      </div>
      <div class="deal-content">
        <h4>${deal.city} (${deal.code})</h4>
        <p>${deal.country} • Popular Direct Route</p>
        <span class="deal-action-link">
          Explore Flights <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  `).join("");
}

function quickBookDeal(from, to) {
  const searchFrom = document.getElementById("searchFrom");
  const searchTo = document.getElementById("searchTo");
  const homeFrom = document.getElementById("homeFrom");
  const homeTo = document.getElementById("homeTo");

  if (searchFrom && searchTo) {
    searchFrom.value = from;
    searchTo.value = to;
  }
  if (homeFrom && homeTo) {
    homeFrom.value = from;
    homeTo.value = to;
  }

  showPage("search");
  filterAndRenderFlights();
}

// --- Autocomplete & Search Initialization ---
function initSearchAutocomplete() {
  // Sync home inputs to search inputs
  const homeFrom = document.getElementById("homeFrom");
  const searchFrom = document.getElementById("searchFrom");
  const homeTo = document.getElementById("homeTo");
  const searchTo = document.getElementById("searchTo");

  if (homeFrom && searchFrom) {
    homeFrom.addEventListener("change", () => searchFrom.value = homeFrom.value);
    searchFrom.addEventListener("change", () => homeFrom.value = searchFrom.value);
  }
  if (homeTo && searchTo) {
    homeTo.addEventListener("change", () => searchTo.value = homeTo.value);
    searchTo.addEventListener("change", () => homeTo.value = searchTo.value);
  }
}

// Search Button Trigger from Hero
function executeHeroSearch() {
  const homeFrom = document.getElementById("homeFrom").value;
  const homeTo = document.getElementById("homeTo").value;
  const homeDate = document.getElementById("homeDate").value;
  const homePassengers = parseInt(document.getElementById("homePassengers").value) || 1;
  const homeClass = document.getElementById("homeTravelClass").value;

  if (homeFrom === homeTo) {
    showToast("error", "Invalid Route", "Departure and destination cities cannot be the same.");
    return;
  }

  // Sync to search page widgets
  document.getElementById("searchFrom").value = homeFrom;
  document.getElementById("searchTo").value = homeTo;
  document.getElementById("searchDate").value = homeDate;

  wizardState.passengerCount = homePassengers;
  wizardState.cabinClass = homeClass;
  wizardState.classMultiplier = getClassMultiplier(homeClass);

  showPage("search");
}

function getClassMultiplier(className) {
  switch (className) {
    case "premium": return 1.4;
    case "business": return 2.5;
    case "first": return 4.0;
    default: return 1.0;
  }
}

// --- Flight Search, Filter & Sorting System ---
function filterAndRenderFlights() {
  const from = document.getElementById("searchFrom").value;
  const to = document.getElementById("searchTo").value;
  const sortBy = document.getElementById("sortSelector").value;
  const maxPrice = parseInt(document.getElementById("priceRangeInput").value) || 80000;
  const directOnly = document.getElementById("filterDirectOnly").checked;

  // Selected airlines
  const selectedAirlines = Array.from(document.querySelectorAll(".filter-airline-checkbox:checked"))
    .map(cb => cb.value);

  // Time of day filters
  const selectedTimes = Array.from(document.querySelectorAll(".filter-time-checkbox:checked"))
    .map(cb => cb.value);

  // Filter logic
  let results = flights.filter(f => {
    // Route matching (allow match if specified or wildcard)
    const matchRoute = (f.from === from && f.to === to) || (from === "ALL" || to === "ALL");
    if (!matchRoute) return false;

    // Direct only
    if (directOnly && f.stops > 0) return false;

    // Price ceiling (base price * classMultiplier)
    const effectivePrice = Math.round(f.price * wizardState.classMultiplier);
    if (effectivePrice > maxPrice) return false;

    // Airline filter
    if (selectedAirlines.length > 0 && !selectedAirlines.includes(f.airline)) {
      return false;
    }

    // Time filter
    if (selectedTimes.length > 0) {
      const hour = parseHour(f.depTime);
      const inMorning = selectedTimes.includes("morning") && hour >= 6 && hour < 12;
      const inAfternoon = selectedTimes.includes("afternoon") && hour >= 12 && hour < 18;
      const inEvening = selectedTimes.includes("evening") && hour >= 18 && hour < 24;
      const inNight = selectedTimes.includes("night") && (hour >= 0 && hour < 6);
      if (!(inMorning || inAfternoon || inEvening || inNight)) return false;
    }

    return true;
  });

  // Sort logic
  if (sortBy === "price_asc") {
    results.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_desc") {
    results.sort((a, b) => b.price - a.price);
  } else if (sortBy === "duration_asc") {
    results.sort((a, b) => a.durationMins - b.durationMins);
  } else if (sortBy === "departure_asc") {
    results.sort((a, b) => parseHour(a.depTime) - parseHour(b.depTime));
  } else if (sortBy === "rating_desc") {
    results.sort((a, b) => b.rating - a.rating);
  }

  // Update Route Summary Heading
  const summaryEl = document.getElementById("searchRouteSummary");
  if (summaryEl) {
    summaryEl.innerHTML = `
      <h2>${from} → ${to}</h2>
      <p>Found <strong>${results.length} available flights</strong> • Class: <span style="text-transform: capitalize;">${wizardState.cabinClass}</span></p>
    `;
  }

  renderFlightResults(results);
}

function parseHour(timeString) {
  // e.g. "06:30 AM" or "10:10 PM"
  const parts = timeString.split(" ");
  const timeParts = parts[0].split(":");
  let hour = parseInt(timeParts[0]);
  const isPM = parts[1] === "PM";
  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;
  return hour;
}

function updatePriceFilterLabel(val) {
  document.getElementById("priceRangeValue").innerText = formatPrice(val);
  filterAndRenderFlights();
}

function resetAllFilters() {
  document.getElementById("priceRangeInput").value = 80000;
  document.getElementById("priceRangeValue").innerText = formatPrice(80000);
  document.getElementById("filterDirectOnly").checked = false;
  document.querySelectorAll(".filter-airline-checkbox").forEach(cb => cb.checked = false);
  document.querySelectorAll(".filter-time-checkbox").forEach(cb => cb.checked = false);
  document.getElementById("sortSelector").value = "price_asc";
  filterAndRenderFlights();
  showToast("info", "Filters Reset", "Showing all available flight options.");
}

function renderFlightResults(results) {
  const container = document.getElementById("flightResultsContainer");
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-results-box">
        <i class="fa-solid fa-plane-slash"></i>
        <h3>No flights match your exact criteria</h3>
        <p>Try clearing your price range or airline filters to see more routes.</p>
        <button class="btn-primary-action" style="margin-top:16px;" onclick="resetAllFilters()">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(f => {
    const calculatedPrice = Math.round(f.price * wizardState.classMultiplier);
    const stopBadge = f.stops === 0
      ? `<span class="stops-pill">Non-Stop</span>`
      : `<span class="stops-pill one-stop">${f.stops} Stop</span>`;

    return `
      <div class="flight-card-modern">
        <div class="flight-card-main">
          <!-- Airline Brand Info -->
          <div class="airline-info-col">
            <div class="airline-logo-box">
              <i class="fa-solid fa-plane-departure"></i>
            </div>
            <div class="airline-text">
              <h4>${f.airline}</h4>
              <span class="flight-code-badge">${f.flightNo}</span>
              <p style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
                ⭐ ${f.rating} • ${f.aircraft}
              </p>
            </div>
          </div>

          <!-- Route Timeline -->
          <div class="flight-timeline-col">
            <div class="time-point">
              <div class="time-val">${f.depTime}</div>
              <div class="airport-code">${f.fromCode}</div>
              <p style="font-size:0.75rem; color:var(--text-muted);">${f.fromCity}</p>
            </div>

            <div class="timeline-visual">
              <span class="duration-text">${f.duration}</span>
              <div class="timeline-line">
                <i class="fa-solid fa-plane timeline-plane-icon"></i>
              </div>
              ${stopBadge}
            </div>

            <div class="time-point arrival">
              <div class="time-val">${f.arrTime}</div>
              <div class="airport-code">${f.toCode}</div>
              <p style="font-size:0.75rem; color:var(--text-muted);">${f.toCity}</p>
            </div>
          </div>

          <!-- Price & Booking CTA -->
          <div class="flight-price-col">
            <span class="price-unit-label">Price per passenger</span>
            <div class="price-amount">${formatPrice(calculatedPrice)}</div>
            <button class="btn-select-flight" onclick="startBookingWizard(${f.id})">
              <span>Select Seats</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Inclusions & Expandable Details -->
        <div class="flight-card-footer">
          <div class="amenities-list">
            <span class="amenity-item"><i class="fa-solid fa-suitcase"></i> 7kg Cabin + 15kg Check-in</span>
            <span class="amenity-item"><i class="fa-solid fa-utensils"></i> Meal Included</span>
            <span class="amenity-item"><i class="fa-solid fa-wifi"></i> Wi-Fi Available</span>
            <span class="amenity-item"><i class="fa-solid fa-plug"></i> USB Power</span>
          </div>

          <button class="btn-flight-details-toggle" onclick="toggleFlightDetails(this, ${f.id})">
            <span>Details</span> <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <!-- Expandable Drawer -->
        <div class="flight-details-drawer" id="details-drawer-${f.id}">
          <div class="details-grid-cols">
            <div class="detail-col-box">
              <h5><i class="fa-solid fa-circle-info"></i> Flight & Aircraft</h5>
              <p>Aircraft: <strong>${f.aircraft}</strong></p>
              <p>Departure Terminal: <strong>${f.terminal}</strong> (Gate ${f.gate})</p>
              <p>On-time Performance: <strong>96%</strong></p>
            </div>
            <div class="detail-col-box">
              <h5><i class="fa-solid fa-shield-halved"></i> Fare Rules & Baggage</h5>
              <p>Cabin Luggage: 1 piece up to 7 kg</p>
              <p>Check-in Baggage: 15 kg standard</p>
              <p>Cancellation: Partial refund up to 2h prior</p>
            </div>
            <div class="detail-col-box">
              <h5><i class="fa-solid fa-gem"></i> Class Perks (${wizardState.cabinClass})</h5>
              <p>Seat Pitch: 32 - 38 inches</p>
              <p>In-flight Entertainment: High Definition Screen</p>
              <p>SkyMiles Earn: ~850 Points</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleFlightDetails(button, id) {
  const drawer = document.getElementById(`details-drawer-${id}`);
  if (!drawer) return;
  const isOpen = drawer.classList.contains("open");
  drawer.classList.toggle("open", !isOpen);
  button.querySelector("i").style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

// ==========================================================================
// Multi-Step Booking Wizard Controller
// ==========================================================================

function startBookingWizard(flightId) {
  const flight = flights.find(f => f.id === flightId);
  if (!flight) return;

  wizardState.flight = flight;
  wizardState.step = 1;
  wizardState.selectedSeats = {};
  wizardState.appliedCoupon = null;
  wizardState.addons = {
    insurance: false,
    extraBaggage: 0,
    meal: false,
    priority: false
  };

  // Pre-populate passenger form fields
  renderPassengerForms();
  renderWizardFlightSummary();
  updateStepperView();

  const modal = document.getElementById("bookingWizardModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeWizardModal() {
  const modal = document.getElementById("bookingWizardModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function updateStepperView() {
  document.querySelectorAll(".step-node").forEach(node => {
    const nodeStep = parseInt(node.dataset.step);
    node.classList.toggle("active", nodeStep === wizardState.step);
    node.classList.toggle("completed", nodeStep < wizardState.step);
  });

  document.querySelectorAll(".booking-step-content").forEach(content => {
    content.classList.toggle("active", parseInt(content.dataset.step) === wizardState.step);
  });

  // Footer navigation buttons
  const prevBtn = document.getElementById("wizardPrevBtn");
  const nextBtn = document.getElementById("wizardNextBtn");

  if (prevBtn) {
    prevBtn.style.visibility = wizardState.step > 1 ? "visible" : "hidden";
  }

  if (nextBtn) {
    if (wizardState.step === 4) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "inline-flex";
      nextBtn.innerHTML = `<span>Continue</span> <i class="fa-solid fa-arrow-right"></i>`;
    }
  }
}

function wizardGoNext() {
  if (wizardState.step === 1) {
    if (!validatePassengerForm()) return;
    renderCabinSeatMap();
  } else if (wizardState.step === 2) {
    // Addons step finished -> proceed to seat map
    renderCabinSeatMap();
  } else if (wizardState.step === 3) {
    // Validate seat selection for all passengers
    const selectedCount = Object.keys(wizardState.selectedSeats).length;
    if (selectedCount < wizardState.passengerCount) {
      showToast("error", "Seats Required", `Please select seats for all ${wizardState.passengerCount} passengers.`);
      return;
    }
    // Calculate total prices before checkout
    calculateWizardTotals();
    renderCheckoutBreakdown();
  }

  if (wizardState.step < 4) {
    wizardState.step++;
    updateStepperView();
  }
}

function wizardGoPrev() {
  if (wizardState.step > 1) {
    wizardState.step--;
    updateStepperView();
  }
}

function renderWizardFlightSummary() {
  const summaryEl = document.getElementById("wizardFlightSummary");
  if (!summaryEl || !wizardState.flight) return;

  const f = wizardState.flight;
  summaryEl.innerHTML = `
    <div>
      <h4>${f.airline} • ${f.flightNo} (${wizardState.cabinClass.toUpperCase()})</h4>
      <p>${f.from} ➔ ${f.to} • ${f.depTime} - ${f.arrTime} (${f.duration})</p>
    </div>
    <div style="text-align:right;">
      <span style="font-size:0.8rem; color:#93c5fd;">Base Fare (${wizardState.passengerCount} Pax)</span>
      <h3 style="color:#ffffff; font-size:1.5rem;">${formatPrice(Math.round(f.price * wizardState.classMultiplier) * wizardState.passengerCount)}</h3>
    </div>
  `;
}

// --- Step 1: Passenger Form Generation ---
function renderPassengerForms() {
  const container = document.getElementById("passengerFormsContainer");
  if (!container) return;

  let html = "";
  for (let i = 0; i < wizardState.passengerCount; i++) {
    html += `
      <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; margin-bottom:18px;">
        <h4 style="font-size:0.95rem; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-user-astronaut" style="color:var(--primary-600);"></i> Passenger ${i + 1} Details
        </h4>
        <div class="form-grid-3cols">
          <div class="form-field">
            <label>Title</label>
            <select id="p_title_${i}">
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Dr">Dr.</option>
            </select>
          </div>
          <div class="form-field" style="grid-column: span 2;">
            <label>Full Name (as on ID / Passport)</label>
            <input type="text" id="p_name_${i}" placeholder="e.g. Johnathan Doe" required>
          </div>
        </div>

        <div class="form-grid-3cols">
          <div class="form-field">
            <label>Age</label>
            <input type="number" id="p_age_${i}" min="1" max="110" placeholder="28" required>
          </div>
          <div class="form-field">
            <label>Passport / National ID</label>
            <input type="text" id="p_id_${i}" placeholder="A1234567" required>
          </div>
          <div class="form-field">
            <label>SkyMiles / Frequent Flyer</label>
            <input type="text" id="p_miles_${i}" placeholder="Optional">
          </div>
        </div>

        ${i === 0 ? `
          <div class="form-grid-2cols" style="margin-top:10px;">
            <div class="form-field">
              <label>Contact Email (for E-Ticket)</label>
              <input type="email" id="p_email" placeholder="john.doe@example.com" required>
            </div>
            <div class="form-field">
              <label>Phone Number (with Country Code)</label>
              <input type="tel" id="p_phone" placeholder="+91 98765 43210" required>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  container.innerHTML = html;
}

function validatePassengerForm() {
  wizardState.passengers = [];
  const email = document.getElementById("p_email")?.value.trim();
  const phone = document.getElementById("p_phone")?.value.trim();

  if (!email || !email.includes("@")) {
    showToast("error", "Email Required", "Please provide a valid contact email for ticket delivery.");
    return false;
  }
  if (!phone || phone.length < 8) {
    showToast("error", "Phone Required", "Please provide a valid phone number.");
    return false;
  }

  for (let i = 0; i < wizardState.passengerCount; i++) {
    const title = document.getElementById(`p_title_${i}`)?.value;
    const name = document.getElementById(`p_name_${i}`)?.value.trim();
    const age = document.getElementById(`p_age_${i}`)?.value.trim();
    const id = document.getElementById(`p_id_${i}`)?.value.trim();

    if (!name || !age || !id) {
      showToast("error", "Incomplete Form", `Please fill in all required fields for Passenger ${i + 1}.`);
      return false;
    }

    wizardState.passengers.push({
      title,
      name,
      age,
      id,
      email,
      phone,
      seat: null
    });
  }

  return true;
}

// --- Step 2: Add-ons Toggles ---
function toggleAddon(type, value) {
  if (type === "insurance") {
    wizardState.addons.insurance = !wizardState.addons.insurance;
    document.getElementById("addon-insurance")?.classList.toggle("selected", wizardState.addons.insurance);
  } else if (type === "meal") {
    wizardState.addons.meal = !wizardState.addons.meal;
    document.getElementById("addon-meal")?.classList.toggle("selected", wizardState.addons.meal);
  } else if (type === "priority") {
    wizardState.addons.priority = !wizardState.addons.priority;
    document.getElementById("addon-priority")?.classList.toggle("selected", wizardState.addons.priority);
  } else if (type === "baggage") {
    wizardState.addons.extraBaggage = value;
    document.querySelectorAll(".addon-baggage-btn").forEach(btn => {
      btn.classList.toggle("selected", parseInt(btn.dataset.kg) === value);
    });
  }

  calculateWizardTotals();
}

// --- Step 3: Interactive Airplane Cabin Seat Map ---
function renderCabinSeatMap() {
  const container = document.getElementById("cabinSeatGrid");
  if (!container) return;

  // Find seats already booked for this flight
  const bookedSeatCodes = bookings
    .filter(b => b.flightId === wizardState.flight.id && b.status !== "Cancelled")
    .map(b => b.seat);

  let html = `
    <div class="airplane-nose">
      <div class="cockpit-windows">
        <div class="cockpit-window"></div>
        <div class="cockpit-window"></div>
      </div>
    </div>
    
    <div class="cabin-class-divider">Business Class (Spacious 2x2)</div>
  `;

  // Rows 1-2: Business Class (2x2)
  for (let row = 1; row <= 2; row++) {
    html += `<div class="seat-row"><span class="row-num">${row}</span>`;
    ["A", "C"].forEach(letter => html += renderSeatButton(row, letter, "business", bookedSeatCodes));
    html += `<div class="aisle-space"><i class="fa-solid fa-arrows-up-down"></i></div>`;
    ["D", "F"].forEach(letter => html += renderSeatButton(row, letter, "business", bookedSeatCodes));
    html += `</div>`;
  }

  html += `<div class="cabin-class-divider">Premium Extra Legroom (3x3)</div>`;

  // Rows 3-4: Extra Legroom (3x3)
  for (let row = 3; row <= 4; row++) {
    html += `<div class="seat-row"><span class="row-num">${row}</span>`;
    ["A", "B", "C"].forEach(letter => html += renderSeatButton(row, letter, "extra-legroom", bookedSeatCodes));
    html += `<div class="aisle-space"><i class="fa-solid fa-arrows-up-down"></i></div>`;
    ["D", "E", "F"].forEach(letter => html += renderSeatButton(row, letter, "extra-legroom", bookedSeatCodes));
    html += `</div>`;
  }

  html += `<div class="cabin-class-divider">Standard Economy</div>`;

  // Rows 5-10: Standard Economy (3x3)
  for (let row = 5; row <= 10; row++) {
    html += `<div class="seat-row"><span class="row-num">${row}</span>`;
    ["A", "B", "C"].forEach(letter => html += renderSeatButton(row, letter, "standard", bookedSeatCodes));
    html += `<div class="aisle-space"><i class="fa-solid fa-arrows-up-down"></i></div>`;
    ["D", "E", "F"].forEach(letter => html += renderSeatButton(row, letter, "standard", bookedSeatCodes));
    html += `</div>`;
  }

  container.innerHTML = html;
  updateSeatSelectionIndicator();
}

function renderSeatButton(row, letter, type, bookedList) {
  const code = `${row}${letter}`;
  const isBooked = bookedList.includes(code);
  const isSelected = Object.values(wizardState.selectedSeats).includes(code);

  let priceFee = 0;
  if (type === "business") priceFee = 1500;
  else if (type === "extra-legroom") priceFee = 500;

  return `
    <button class="seat-btn ${type} ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}"
      id="seat-btn-${code}"
      ${isBooked ? 'disabled' : ''}
      onclick="handleSeatClick('${code}', ${priceFee}, '${type}')"
      title="Seat ${code} (${type} - ${priceFee > 0 ? '+₹' + priceFee : 'Free'})">
      ${code}
    </button>
  `;
}

function handleSeatClick(seatCode, fee, type) {
  // Determine which passenger is selecting next
  const currentAssignedIndices = Object.keys(wizardState.selectedSeats).map(Number);
  let nextPaxIndex = 0;

  // If this seat was already selected by someone, deselect it
  for (let idx in wizardState.selectedSeats) {
    if (wizardState.selectedSeats[idx] === seatCode) {
      delete wizardState.selectedSeats[idx];
      document.getElementById(`seat-btn-${seatCode}`)?.classList.remove("selected");
      updateSeatSelectionIndicator();
      return;
    }
  }

  // Find lowest available passenger index that needs a seat
  for (let i = 0; i < wizardState.passengerCount; i++) {
    if (!wizardState.selectedSeats[i]) {
      nextPaxIndex = i;
      break;
    }
  }

  // If all are filled, replace passenger 0
  wizardState.selectedSeats[nextPaxIndex] = seatCode;
  document.getElementById(`seat-btn-${seatCode}`)?.classList.add("selected");
  updateSeatSelectionIndicator();
}

function updateSeatSelectionIndicator() {
  const indicator = document.getElementById("seatSelectionStatusText");
  if (!indicator) return;

  const assigned = [];
  for (let i = 0; i < wizardState.passengerCount; i++) {
    const seat = wizardState.selectedSeats[i];
    const paxName = wizardState.passengers[i]?.name || `Passenger ${i + 1}`;
    assigned.push(`${paxName}: <strong>${seat || 'Unassigned'}</strong>`);
  }

  indicator.innerHTML = assigned.join(" • ");
}

// --- Step 4: Checkout, Pricing & Payment Simulation ---
function calculateWizardTotals() {
  if (!wizardState.flight) return;

  const basePricePerPax = Math.round(wizardState.flight.price * wizardState.classMultiplier);
  const baseFareTotal = basePricePerPax * wizardState.passengerCount;

  // Seat fees
  let seatFees = 0;
  Object.values(wizardState.selectedSeats).forEach(seat => {
    const row = parseInt(seat);
    if (row <= 2) seatFees += 1500;
    else if (row <= 4) seatFees += 500;
  });

  // Addons fees
  let addonsFee = 0;
  if (wizardState.addons.insurance) addonsFee += 499 * wizardState.passengerCount;
  if (wizardState.addons.meal) addonsFee += 350 * wizardState.passengerCount;
  if (wizardState.addons.priority) addonsFee += 899 * wizardState.passengerCount;
  if (wizardState.addons.extraBaggage === 10) addonsFee += 1200;
  if (wizardState.addons.extraBaggage === 20) addonsFee += 2100;

  // Taxes (standard 12% aviation GST & airport charges)
  const taxableSum = baseFareTotal + seatFees + addonsFee;
  const taxes = Math.round(taxableSum * 0.12);

  // Discount
  let discount = 0;
  if (wizardState.appliedCoupon) {
    if (wizardState.appliedCoupon.discountPercent) {
      discount = Math.round((taxableSum * wizardState.appliedCoupon.discountPercent) / 100);
    } else if (wizardState.appliedCoupon.discountFlat) {
      discount = wizardState.appliedCoupon.discountFlat;
    }
  }

  const grandTotal = Math.max(0, taxableSum + taxes - discount);

  wizardState.totals = {
    baseFare: baseFareTotal,
    seatFees,
    addonsFee,
    taxes,
    discount,
    grandTotal
  };
}

function renderCheckoutBreakdown() {
  const container = document.getElementById("checkoutBreakdownContainer");
  if (!container) return;

  const t = wizardState.totals;
  container.innerHTML = `
    <div class="breakdown-row">
      <span>Base Airfare (${wizardState.passengerCount} Passengers • ${wizardState.cabinClass})</span>
      <span>${formatPrice(t.baseFare)}</span>
    </div>
    ${t.seatFees > 0 ? `
      <div class="breakdown-row">
        <span>Seat Reservation Charges</span>
        <span>+${formatPrice(t.seatFees)}</span>
      </div>
    ` : ''}
    ${t.addonsFee > 0 ? `
      <div class="breakdown-row">
        <span>Ancillaries (Meals, Baggage, Insurance)</span>
        <span>+${formatPrice(t.addonsFee)}</span>
      </div>
    ` : ''}
    <div class="breakdown-row">
      <span>Airport Charges & Aviation Taxes (12%)</span>
      <span>+${formatPrice(t.taxes)}</span>
    </div>
    ${t.discount > 0 ? `
      <div class="breakdown-row discount-row">
        <span>Promo Voucher Savings</span>
        <span>-${formatPrice(t.discount)}</span>
      </div>
    ` : ''}
    <div class="breakdown-row total-row">
      <span>Total Amount Payable</span>
      <span style="color:var(--primary-600);">${formatPrice(t.grandTotal)}</span>
    </div>
  `;

  // Update card mockup amount
  const payBtnText = document.getElementById("payButtonTotal");
  if (payBtnText) {
    payBtnText.innerText = formatPrice(t.grandTotal);
  }
}

// Promo Code Application
function applyCouponCode() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (COUPONS[code]) {
    wizardState.appliedCoupon = COUPONS[code];
    calculateWizardTotals();
    renderCheckoutBreakdown();
    showToast("success", "Coupon Applied!", `${COUPONS[code].description} applied to your fare.`);
  } else {
    showToast("error", "Invalid Code", "Please enter a valid coupon code (e.g. SKYFLY20, FESTIVE).");
  }
}

// Payment Tabs Switcher
function selectPaymentTab(method) {
  document.querySelectorAll(".payment-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.method === method);
  });

  const cardSection = document.getElementById("paymentCardSection");
  const upiSection = document.getElementById("paymentUpiSection");
  const netBankingSection = document.getElementById("paymentNetBankingSection");

  if (cardSection) cardSection.style.display = method === "card" ? "block" : "none";
  if (upiSection) upiSection.style.display = method === "upi" ? "block" : "none";
  if (netBankingSection) netBankingSection.style.display = method === "netbanking" ? "block" : "none";
}

// Live Credit Card input visualizer
function updateCardPreview() {
  const numInput = document.getElementById("cardNumInput");
  const nameInput = document.getElementById("cardHolderInput");
  const expInput = document.getElementById("cardExpInput");

  const numDisplay = document.getElementById("cardDisplayNumber");
  const nameDisplay = document.getElementById("cardDisplayName");
  const expDisplay = document.getElementById("cardDisplayExp");

  if (numInput && numDisplay) {
    numDisplay.innerText = numInput.value || "•••• •••• •••• ••••";
  }
  if (nameInput && nameDisplay) {
    nameDisplay.innerText = (nameInput.value || "YOUR NAME").toUpperCase();
  }
  if (expInput && expDisplay) {
    expDisplay.innerText = expInput.value || "MM/YY";
  }
}

// Execute Payment Simulation & Generate Electronic Ticket
function executeBookingPayment() {
  const activeTab = document.querySelector(".payment-tab-btn.active")?.dataset.method || "card";

  if (activeTab === "card") {
    const num = document.getElementById("cardNumInput")?.value.trim() || "4532 8920 1192 4892";
    const cvv = document.getElementById("cardCvvInput")?.value.trim() || "842";
    // Accepts simulated card smoothly
  }

  // Trigger processing overlay
  const payBtn = document.getElementById("wizardPayButton");
  if (payBtn) {
    payBtn.disabled = true;
    payBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing 256-Bit SSL Payment...`;
  }

  setTimeout(() => {
    // Generate confirmed booking records
    const pnr = "SK" + Math.random().toString(36).substring(2, 6).toUpperCase() + Math.floor(10 + Math.random() * 90);
    const newBookings = [];

    wizardState.passengers.forEach((pax, idx) => {
      const assignedSeat = wizardState.selectedSeats[idx] || "12B";
      const record = {
        id: "BK" + Date.now() + idx,
        pnr,
        flightId: wizardState.flight.id,
        airline: wizardState.flight.airline,
        flightNo: wizardState.flight.flightNo,
        aircraft: wizardState.flight.aircraft,
        from: wizardState.flight.from,
        fromCode: wizardState.flight.fromCode,
        fromCity: wizardState.flight.fromCity,
        to: wizardState.flight.to,
        toCode: wizardState.flight.toCode,
        toCity: wizardState.flight.toCity,
        depTime: wizardState.flight.depTime,
        arrTime: wizardState.flight.arrTime,
        terminal: wizardState.flight.terminal,
        gate: wizardState.flight.gate,
        passenger: pax.name,
        passengerTitle: pax.title,
        passengerId: pax.id,
        email: pax.email,
        phone: pax.phone,
        seat: assignedSeat,
        cabinClass: wizardState.cabinClass,
        total: Math.round(wizardState.totals.grandTotal / wizardState.passengerCount),
        grandBookingTotal: wizardState.totals.grandTotal,
        status: "Confirmed",
        bookedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }),
        addons: { ...wizardState.addons }
      };

      newBookings.push(record);
      bookings.push(record);
    });

    localStorage.setItem("skyBookings_v2", JSON.stringify(bookings));

    if (payBtn) {
      payBtn.disabled = false;
      payBtn.innerHTML = `<span>Complete Payment</span>`;
    }

    closeWizardModal();
    showToast("success", "Booking Confirmed!", `Your PNR is ${pnr}. Electronic Ticket generated.`);

    // Display Deluxe Boarding Pass
    renderBoardingPassTicket(newBookings[0]);
    updateStatsCounters();
  }, 1200);
}

// ==========================================================================
// Boarding Pass & Electronic Ticket Modal
// ==========================================================================

function renderBoardingPassTicket(booking) {
  const container = document.getElementById("ticketDisplayContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="ticket-wrapper">
      <div class="ticket-notch-top"></div>
      <div class="ticket-notch-bottom"></div>
      <div class="ticket-perforation"></div>

      <!-- Ticket Header Band -->
      <div class="ticket-header-band">
        <div class="ticket-logo">
          <i class="fa-solid fa-plane-up"></i>
          <span>SkyBook Pass</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.85rem; font-weight:600; opacity:0.8;">ELECTRONIC BOARDING PASS</span>
          <span class="ticket-pnr-badge">${booking.pnr}</span>
        </div>
      </div>

      <!-- Ticket Body -->
      <div class="ticket-body">
        <!-- Main Flight Section -->
        <div class="ticket-main-section">
          <div class="ticket-route-display">
            <div class="ticket-station">
              <h3>${booking.fromCode}</h3>
              <p>${booking.fromCity}</p>
            </div>
            <i class="fa-solid fa-plane ticket-flight-icon-arrow"></i>
            <div class="ticket-station" style="text-align:right;">
              <h3>${booking.toCode}</h3>
              <p>${booking.toCity}</p>
            </div>
          </div>

          <div class="ticket-info-grid">
            <div class="ticket-info-cell">
              <span class="cell-label">Passenger Name</span>
              <div class="cell-value">${booking.passenger}</div>
            </div>
            <div class="ticket-info-cell">
              <span class="cell-label">Flight</span>
              <div class="cell-value">${booking.flightNo}</div>
            </div>
            <div class="ticket-info-cell">
              <span class="cell-label">Seat</span>
              <div class="cell-value" style="color:var(--primary-600);">${booking.seat}</div>
            </div>
            <div class="ticket-info-cell">
              <span class="cell-label">Class</span>
              <div class="cell-value" style="text-transform: capitalize;">${booking.cabinClass}</div>
            </div>
            <div class="ticket-info-cell">
              <span class="cell-label">Departure</span>
              <div class="cell-value">${booking.depTime}</div>
            </div>
            <div class="ticket-info-cell">
              <span class="cell-label">Terminal / Gate</span>
              <div class="cell-value">${booking.terminal} • Gate ${booking.gate}</div>
            </div>
          </div>

          <div style="margin-top:20px; font-size:0.75rem; color:var(--text-muted); background:var(--bg-app); padding:10px 14px; border-radius:var(--radius-md);">
            <i class="fa-solid fa-triangle-exclamation" style="color:var(--accent-amber);"></i> Boarding closes 20 minutes before departure. Please carry Govt Issued ID.
          </div>
        </div>

        <!-- Perforated Stub Section -->
        <div class="ticket-stub">
          <div>
            <span class="cell-label">SCAN AT GATE</span>
            <div class="ticket-qr-box" style="margin-top:10px;">
              <i class="fa-solid fa-qrcode" style="font-size:5rem; color:#0f172a;"></i>
            </div>
          </div>
          <div>
            <div class="ticket-barcode-graphic"></div>
            <span style="font-size:0.7rem; font-family:monospace; color:var(--text-muted); letter-spacing:0.1em; display:block; margin-top:4px;">
              ${booking.pnr} - ${booking.seat}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById("ticketModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeTicketModal() {
  const modal = document.getElementById("ticketModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function printTicket() {
  window.print();
}

// ==========================================================================
// Customer Bookings Management Page
// ==========================================================================

function loadBookings() {
  const container = document.getElementById("customerBookingsList");
  if (!container) return;

  const searchVal = document.getElementById("bookingSearchQuery")?.value.toLowerCase().trim() || "";

  let list = bookings;
  if (searchVal) {
    list = list.filter(b => 
      b.pnr.toLowerCase().includes(searchVal) ||
      b.passenger.toLowerCase().includes(searchVal) ||
      b.flightNo.toLowerCase().includes(searchVal)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-results-box">
        <i class="fa-solid fa-ticket-simple"></i>
        <h3>No bookings found</h3>
        <p>You haven't made any flight bookings matching that query yet.</p>
        <button class="btn-primary-action" style="margin-top:16px;" onclick="showPage('search')">
          Search & Book Flights
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(b => {
    let statusClass = "confirmed";
    if (b.status === "Cancelled") statusClass = "cancelled";
    else if (b.status === "Checked In") statusClass = "checked-in";

    return `
      <div class="booking-item-card">
        <div>
          <span class="booking-status-badge ${statusClass}">
            <i class="fa-solid fa-circle-dot"></i> ${b.status}
          </span>
          <h3 style="font-size:1.3rem; margin-bottom:4px;">${b.airline} • ${b.flightNo}</h3>
          <p style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin-bottom:6px;">
            ${b.from} ➔ ${b.to}
          </p>
          <p style="font-size:0.85rem; color:var(--text-muted);">
            Passenger: <strong>${b.passenger}</strong> • Seat: <strong>${b.seat}</strong> • Class: <strong style="text-transform:capitalize;">${b.cabinClass}</strong>
          </p>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
            PNR: <strong style="font-family:monospace; color:var(--primary-600);">${b.pnr}</strong> • Departure: <strong>${b.depTime}</strong> • Booked: ${b.bookedAt}
          </p>
        </div>

        <div class="booking-actions-group">
          <button class="btn-primary-action" style="padding:8px 18px; font-size:0.85rem;" onclick='renderBoardingPassTicket(${JSON.stringify(b)})'>
            <i class="fa-solid fa-ticket"></i> View Pass
          </button>
          ${b.status === "Confirmed" ? `
            <button class="btn-secondary" style="padding:8px 18px; font-size:0.85rem;" onclick="performWebCheckIn('${b.id}')">
              <i class="fa-solid fa-clipboard-check"></i> Web Check-In
            </button>
            <button class="btn-secondary" style="padding:8px 18px; font-size:0.85rem; color:#dc2626; border-color:#fca5a5;" onclick="cancelBookingWithRefund('${b.id}')">
              <i class="fa-solid fa-ban"></i> Cancel Flight
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");
}

function performWebCheckIn(bookingId) {
  const b = bookings.find(item => item.id === bookingId);
  if (!b) return;

  b.status = "Checked In";
  b.gate = "Gate " + (Math.floor(Math.random() * 20) + 1) + "B";
  localStorage.setItem("skyBookings_v2", JSON.stringify(bookings));
  loadBookings();
  showToast("success", "Checked In Successfully!", `Boarding pass for ${b.passenger} is now ready.`);
  renderBoardingPassTicket(b);
}

function cancelBookingWithRefund(bookingId) {
  if (!confirm("Are you sure you want to cancel this booking? A standard 15% cancellation charge applies, and the remainder will be refunded.")) {
    return;
  }

  const b = bookings.find(item => item.id === bookingId);
  if (!b) return;

  b.status = "Cancelled";
  localStorage.setItem("skyBookings_v2", JSON.stringify(bookings));
  loadBookings();
  updateStatsCounters();
  showToast("info", "Flight Cancelled", `Booking ${b.pnr} cancelled. Refund credited to original payment.`);
}

// ==========================================================================
// Live Flight Status & Tracker
// ==========================================================================

function checkFlightStatus() {
  const input = document.getElementById("flightTrackerInput")?.value.trim().toUpperCase();
  const resultBox = document.getElementById("trackerResultBox");
  if (!resultBox) return;

  const f = flights.find(item => item.flightNo.toUpperCase() === input || item.toCode.toUpperCase() === input);

  if (!f) {
    resultBox.innerHTML = `
      <div class="empty-results-box">
        <i class="fa-solid fa-plane-circle-exclamation"></i>
        <h3>Flight Not Found</h3>
        <p>No active flight matches "${input}". Try searching AI-501, 6E-203, EK-500, or SQ-402.</p>
      </div>
    `;
    return;
  }

  resultBox.innerHTML = `
    <div class="tracker-status-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
          <span class="booking-status-badge confirmed"><i class="fa-solid fa-circle-check"></i> On Time</span>
          <h2 style="font-size:1.6rem; margin-top:4px;">${f.airline} • ${f.flightNo}</h2>
          <p>${f.from} ➔ ${f.to} • ${f.aircraft}</p>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.85rem; color:var(--text-muted);">Terminal / Gate</span>
          <h3 style="font-size:1.3rem; color:var(--primary-600);">${f.terminal} • Gate ${f.gate}</h3>
        </div>
      </div>

      <div class="tracker-timeline-bar">
        <div class="tracker-step done">
          <div class="tracker-step-circle"><i class="fa-solid fa-check"></i></div>
          <span>Check-in Open</span>
        </div>
        <div class="tracker-step active">
          <div class="tracker-step-circle"><i class="fa-solid fa-plane"></i></div>
          <span>Boarding</span>
        </div>
        <div class="tracker-step">
          <div class="tracker-step-circle"><i class="fa-solid fa-wind"></i></div>
          <span>Departing (${f.depTime})</span>
        </div>
        <div class="tracker-step">
          <div class="tracker-step-circle"><i class="fa-solid fa-location-dot"></i></div>
          <span>Arriving (${f.arrTime})</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// Admin Portal & Flight Management
// ==========================================================================

function loadAdmin() {
  updateStatsCounters();
  renderAdminFlightsTable();
  renderAdminBookingsTable();
}

function updateStatsCounters() {
  const totalFlightsEl = document.getElementById("adminTotalFlights");
  const totalBookingsEl = document.getElementById("adminTotalBookings");
  const totalRevenueEl = document.getElementById("adminTotalRevenue");
  const activePassengersEl = document.getElementById("adminTotalPassengers");

  if (totalFlightsEl) totalFlightsEl.innerText = flights.length;
  if (totalBookingsEl) totalBookingsEl.innerText = bookings.length;

  const confirmedBookings = bookings.filter(b => b.status !== "Cancelled");
  const totalRev = confirmedBookings.reduce((sum, b) => sum + (b.total || 0), 0);

  if (totalRevenueEl) totalRevenueEl.innerText = formatPrice(totalRev);
  if (activePassengersEl) activePassengersEl.innerText = confirmedBookings.length;
}

function renderAdminFlightsTable() {
  const container = document.getElementById("adminFlightsTableBody");
  if (!container) return;

  container.innerHTML = flights.map(f => `
    <tr>
      <td><strong>${f.airline}</strong></td>
      <td><span class="flight-code-badge">${f.flightNo}</span></td>
      <td>${f.from} ➔ ${f.to}</td>
      <td>${f.depTime}</td>
      <td><strong>${formatPrice(f.price)}</strong></td>
      <td>
        <button class="btn-secondary" style="padding:4px 10px; font-size:0.75rem; color:#dc2626; border-color:#fca5a5;" onclick="deleteFlight(${f.id})">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </td>
    </tr>
  `).join("");
}

function renderAdminBookingsTable() {
  const container = document.getElementById("adminBookingsTableBody");
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:var(--text-muted);">No bookings made yet.</td></tr>`;
    return;
  }

  container.innerHTML = bookings.map(b => `
    <tr>
      <td><strong style="font-family:monospace; color:var(--primary-600);">${b.pnr}</strong></td>
      <td>${b.passenger}</td>
      <td>${b.flightNo} (${b.seat})</td>
      <td>${b.fromCode} ➔ ${b.toCode}</td>
      <td><strong>${formatPrice(b.total)}</strong></td>
      <td><span class="booking-status-badge ${b.status === 'Cancelled' ? 'cancelled' : 'confirmed'}">${b.status}</span></td>
    </tr>
  `).join("");
}

function addFlight() {
  const airline = document.getElementById("adminAirline")?.value.trim();
  const flightNo = document.getElementById("adminFlightNo")?.value.trim();
  const from = document.getElementById("adminFrom")?.value.trim();
  const to = document.getElementById("adminTo")?.value.trim();
  const depTime = document.getElementById("adminDepTime")?.value.trim();
  const arrTime = document.getElementById("adminArrTime")?.value.trim();
  const duration = document.getElementById("adminDuration")?.value.trim();
  const price = parseInt(document.getElementById("adminPrice")?.value) || 0;
  const aircraft = document.getElementById("adminAircraft")?.value.trim() || "Boeing 737";

  if (!airline || !flightNo || !from || !to || !depTime || !arrTime || price <= 0) {
    showToast("error", "Missing Details", "Please fill out all required flight fields.");
    return;
  }

  const fromCode = from.match(/\(([A-Z]{3})\)/)?.[1] || "DEP";
  const toCode = to.match(/\(([A-Z]{3})\)/)?.[1] || "ARR";

  flights.push({
    id: Date.now(),
    airline,
    flightNo,
    airlineCode: flightNo.split("-")[0] || "SK",
    from,
    fromCity: from.split(" (")[0],
    fromCode,
    to,
    toCity: to.split(" (")[0],
    toCode,
    depTime,
    arrTime,
    duration: duration || "2h 30m",
    durationMins: 150,
    stops: 0,
    price,
    aircraft,
    terminal: "T2",
    gate: "15",
    rating: 4.5
  });

  localStorage.setItem("skyFlights_v2", JSON.stringify(flights));
  showToast("success", "Flight Added", `${flightNo} (${airline}) successfully registered.`);
  loadAdmin();

  // Clear inputs
  document.getElementById("adminFlightNo").value = "";
  document.getElementById("adminPrice").value = "";
}

function deleteFlight(flightId) {
  if (!confirm("Are you sure you want to delete this flight from the schedule?")) return;

  flights = flights.filter(f => f.id !== flightId);
  localStorage.setItem("skyFlights_v2", JSON.stringify(flights));
  loadAdmin();
  showToast("info", "Flight Removed", "Flight removed from database.");
}

function resetToDefaultFlights() {
  if (!confirm("Reset flights catalog to default demo routes?")) return;

  flights = [...DEFAULT_FLIGHTS];
  localStorage.setItem("skyFlights_v2", JSON.stringify(flights));
  loadAdmin();
  showToast("success", "Reset Completed", "Catalog restored to default schedule.");
}

// ==========================================================================
// Toast Notification Engine
// ==========================================================================

function showToast(type, title, message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-exclamation";
  if (type === "info") icon = "fa-circle-info";

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close-btn" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
