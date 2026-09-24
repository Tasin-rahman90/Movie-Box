const movieData = {
    'man-of-steel': {
        id: 'man-of-steel',
        title: 'Man of Steel',
        poster: 'Assets/Rectangle 6.png',
        rating: '8.2',
        year: '2013',
        genre: 'Action / Sci-Fi',
        runtime: '2h 23m',
        director: 'Zack Snyder',
        cast: 'Henry Cavill, Amy Adams, Michael Shannon',
        language: 'English',
        screen: 'IMAX Hall 1',
        price: 420,
        badge: 'Now Showing',
        description: 'Kal-El is sent to Earth as a child and later becomes Superman when he must protect humanity from an alien threat. A thrilling, emotional origin story with powerful action and heart.'
    },
    'uncharted': {
        id: 'uncharted',
        title: 'Uncharted',
        poster: 'Assets/pos5.jpg',
        rating: '7.6',
        year: '2022',
        genre: 'Adventure / Action',
        runtime: '1h 56m',
        director: 'Ruben Fleischer',
        cast: 'Tom Holland, Mark Wahlberg, Sophia Ali',
        language: 'English',
        screen: 'VIP Hall 2',
        price: 390,
        badge: 'Top Pick',
        description: 'Nathan Drake and his partner venture on a high-stakes treasure hunt across exotic locations, uncovering ancient secrets and danger at every turn.'
    },
    'tenet': {
        id: 'tenet',
        title: 'TENET',
        poster: 'Assets/pos1.jpg',
        rating: '7.8',
        year: '2020',
        genre: 'Sci-Fi / Thriller',
        runtime: '2h 30m',
        director: 'Christopher Nolan',
        cast: 'John David Washington, Robert Pattinson, Elizabeth Debicki',
        language: 'English',
        screen: 'CineMax Hall 3',
        price: 460,
        badge: 'Mind-Bending',
        description: 'A secret agent navigates a complicated world of time inversion to stop a global catastrophe from reshaping the future itself.'
    },
    'the-curse': {
        id: 'the-curse',
        title: 'The Curse',
        poster: 'Assets/pos2.jpg',
        rating: '7.2',
        year: '2024',
        genre: 'Drama / Mystery',
        runtime: '1h 49m',
        director: 'A. Rahman',
        cast: 'Rafi Karim, Nila Sarker, Anik Hassan',
        language: 'Bangla',
        screen: 'City Hall 4',
        price: 350,
        badge: 'New Release',
        description: 'A family faces a supernatural chain of events after discovering a hidden truth beneath their home, leading to an unraveling mystery and a dangerous legacy.'
    },
    'venom': {
        id: 'venom',
        title: 'Venom',
        poster: 'Assets/pos3.jpg',
        rating: '6.7',
        year: '2018',
        genre: 'Action / Superhero',
        runtime: '2h 20m',
        director: 'Ruben Fleischer',
        cast: 'Tom Hardy, Michelle Williams, Riz Ahmed',
        language: 'English',
        screen: 'Premium Hall 5',
        price: 410,
        badge: 'Popular',
        description: 'A journalist becomes entangled with an alien symbiote, forcing him to confront his darkest instincts while protecting the city from a dangerous threat.'
    },
    'adam-project': {
        id: 'adam-project',
        title: 'The Adam Project',
        poster: 'Assets/pos6.jpg',
        rating: '7.1',
        year: '2022',
        genre: 'Sci-Fi / Adventure',
        runtime: '1h 46m',
        director: 'Shawn Levy',
        cast: 'Ryan Reynolds, Walker Scobell, Zoe Saldaña',
        language: 'English',
        screen: 'Sky Theatre',
        price: 380,
        badge: 'Trending',
        description: 'A time-traveling pilot returns to the past and teams up with his younger self to save the future from catastrophic events.'
    },
    'aladdin': {
        id: 'aladdin',
        title: 'Aladdin',
        poster: 'Assets/Pos7.jpeg',
        rating: '7.0',
        year: '2019',
        genre: 'Fantasy / Adventure',
        runtime: '2h 08m',
        director: 'Guy Ritchie',
        cast: 'Will Smith, Mena Massoud, Naomi Scott',
        language: 'English',
        screen: 'Family Hall 2',
        price: 360,
        badge: 'Family Pick',
        description: 'A street-smart young man discovers a magical lamp and enters a world of wonder, love, and danger in a remarkable adventure.'
    },
    'confused': {
        id: 'confused',
        title: 'Confused',
        poster: 'Assets/pos8.jpeg',
        rating: '6.9',
        year: '2023',
        genre: 'Romance / Drama',
        runtime: '1h 54m',
        director: 'M. Azad',
        cast: 'Ariana Rafi, Sohel Rahman, Nila Ahmed',
        language: 'Bangla',
        screen: 'Moonlight Hall',
        price: 330,
        badge: 'Romance',
        description: 'Two people caught in emotional confusion and shifting life choices find themselves discovering a deeper truth about love and timing.'
    },
    'the-raid': {
        id: 'the-raid',
        title: 'The Raid',
        poster: 'Assets/pos9.jpeg',
        rating: '7.9',
        year: '2019',
        genre: 'Action / Crime',
        runtime: '1h 41m',
        director: 'M. Hasan',
        cast: 'Tuhin Rai, Arif Karim, Karan Nila',
        language: 'Bangla',
        screen: 'Action Hall 7',
        price: 400,
        badge: 'Action',
        description: 'A fearless officer and his team chase a criminal empire through intense underground battles in a gripping story of courage and survival.'
    },
    'shadow': {
        id: 'shadow',
        title: 'Shadow',
        poster: 'Assets/pos3.jpg',
        rating: '7.4',
        year: '2021',
        genre: 'Thriller / Crime',
        runtime: '1h 57m',
        director: 'S. Chowdhury',
        cast: 'Adnan Khan, Saima Noor, Farhan Ali',
        language: 'Bangla',
        screen: 'Noir Hall 6',
        price: 370,
        badge: 'Crime Drama',
        description: 'A detective follows a chain of hidden clues through the city while confronting a dangerous network of betrayal and revenge.'
    }
};

const ticketOptions = [
    { id: 'standard', label: 'Standard', multiplier: 1 },
    { id: 'premium', label: 'Premium', multiplier: 1.25 },
    { id: 'vip', label: 'VIP', multiplier: 1.5 }
];

const params = new URLSearchParams(window.location.search);
const movieId = params.get('movie') || 'man-of-steel';
const movie = movieData[movieId] || movieData['man-of-steel'];

const ticketQty = { value: 1 };
let selectedSeat = ticketOptions[0];

const poster = document.getElementById('moviePoster');
const title = document.getElementById('movieTitle');
const badge = document.getElementById('movieBadge');
const rating = document.getElementById('movieRating');
const year = document.getElementById('movieYear');
const genre = document.getElementById('movieGenre');
const runtime = document.getElementById('movieRuntime');
const description = document.getElementById('movieDescription');
const director = document.getElementById('movieDirector');
const cast = document.getElementById('movieCast');
const language = document.getElementById('movieLanguage');
const screen = document.getElementById('movieScreen');
const qtyText = document.getElementById('ticketQty');
const seatOptions = document.getElementById('seatOptions');
const summaryTickets = document.getElementById('summaryTickets');
const summarySubtotal = document.getElementById('summarySubtotal');
const summaryFees = document.getElementById('summaryFees');
const summaryTotal = document.getElementById('summaryTotal');
const confirmBooking = document.getElementById('confirmBooking');

function renderMovie() {
    poster.src = movie.poster;
    poster.alt = movie.title;
    title.textContent = movie.title;
    badge.textContent = movie.badge;
    rating.textContent = `IMDb ${movie.rating}`;
    year.textContent = movie.year;
    genre.textContent = movie.genre;
    runtime.textContent = movie.runtime;
    description.textContent = movie.description;
    director.textContent = movie.director;
    cast.textContent = movie.cast;
    language.textContent = movie.language;
    screen.textContent = movie.screen;
    qtyText.textContent = ticketQty.value;
    renderSeatOptions();
    updateSummary();
}

function renderSeatOptions() {
    seatOptions.innerHTML = '';

    ticketOptions.forEach((option) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'seat-option' + (selectedSeat.id === option.id ? ' active' : '');
        btn.textContent = `${option.label} (${Math.round(movie.price * option.multiplier)})`;
        btn.addEventListener('click', () => {
            selectedSeat = option;
            renderSeatOptions();
            updateSummary();
        });
        seatOptions.appendChild(btn);
    });
}

function updateSummary() {
    const subtotal = movie.price * selectedSeat.multiplier * ticketQty.value;
    const fee = 40 * ticketQty.value;
    const total = subtotal + fee;

    summaryTickets.textContent = String(ticketQty.value);
    summarySubtotal.textContent = `৳${subtotal}`;
    summaryFees.textContent = `৳${fee}`;
    summaryTotal.textContent = `৳${total}`;
    qtyText.textContent = String(ticketQty.value);
}

document.querySelectorAll('.qty-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const delta = Number(button.dataset.qty);
        const next = ticketQty.value + delta;
        ticketQty.value = Math.max(1, next);
        updateSummary();
    });
});

confirmBooking.addEventListener('click', () => {
    const total = movie.price * selectedSeat.multiplier * ticketQty.value + 40 * ticketQty.value;
    alert(`Booking confirmed for ${ticketQty.value} ${selectedSeat.label} ticket(s) for ${movie.title}. Total: ৳${total}`);
});

renderMovie();
