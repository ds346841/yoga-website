import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const YOGA_CLASSES = [
  {
    id: 1,
    title: "Yoga for Beginners",
    instructor: "Michael Chen",
    description: "Learn the fundamentals of yoga in a supportive environment.",
    duration: 60,
    level: "Beginner",
    price: 15,
    date: "2025-05-30",
    time: "10:00",
    capacity: 15,
    enrolled: 7,
    image: "/yoga-beginners.jpg"
  },
  {
    id: 2,
    title: "Intermediate Yoga",
    instructor: "Lisa Rodriguez",
    description: "Challenge yourself with deeper poses and breathwork.",
    duration: 75,
    level: "Intermediate",
    price: 18,
    date: "2025-05-31",
    time: "14:00",
    capacity: 18,
    enrolled: 12,
    image: "/yoga-intermediate.jpg"
  },
  {
    id: 3,
    title: "Advanced Power Yoga",
    instructor: "Sarah Johnson",
    description: "A dynamic practice for experienced yogis seeking intensity.",
    duration: 90,
    level: "Advanced",
    price: 20,
    date: "2025-06-01",
    time: "17:30",
    capacity: 20,
    enrolled: 10,
    image: "/yoga-advance.jpg"
  }
];


const Navigation = ({ currentUser, onLogout, setCurrentPage }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-lg">
    <div className="container">
      <span 
        className="navbar-brand fw-bold fs-3" 
        role="button" 
        onClick={() => setCurrentPage('home')}
        style={{ cursor: 'pointer' }}
      >
        ZenYoga Studio
      </span>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="ms-auto d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button 
                className="btn btn-link nav-link text-white fw-semibold" 
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-link nav-link text-white fw-semibold" 
                onClick={() => setCurrentPage('classes')}
              >
                Classes
              </button>
            </li>
            {!currentUser && (
              <li className="nav-item">
                <button 
                  className="btn btn-success ms-2" 
                  onClick={() => setCurrentPage('login')}
                >
                  Login
                </button>
              </li>
            )}
            {currentUser && (
              <li className="nav-item d-flex align-items-center">
                <span className="navbar-text me-3 text-white">Welcome, {currentUser.name}</span>
                <button onClick={onLogout} className="btn btn-outline-light">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
  {
    image: "/practice.jpg",
    title: "Peaceful Practice Space",
    description: "Our main studio offers a serene environment for all yoga practices"
  },
  {
    image: "/group.jpg", 
    title: "Group Classes",
    description: "Join our welcoming community in group yoga sessions"
  },
  {
    image: "/private.png",
    title: "Private Sessions", 
    description: "One-on-one instruction tailored to your personal goals"
  },
  {
    image: "/meditation.jpg",
    title: "Meditation Corner",
    description: "Quiet space dedicated to mindfulness and meditation"
  },
  {
    image: "/outdoor.jpg",
    title: "Outdoor Yoga",
    description: "Connect with nature in our beautiful outdoor sessions"
  }
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="position-relative mx-auto" style={{ maxWidth: '800px' }}>
      {/* Main slider container */}
      <div className="position-relative overflow-hidden rounded-3 shadow-lg" style={{ height: '400px' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`position-absolute w-100 h-100 transition-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transition: 'opacity 1s ease-in-out',
              top: 0,
              left: 0
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-100 h-100 object-fit-cover"
            />
            {/* Overlay with gradient */}
            <div 
              className="position-absolute w-100 h-100" 
              style={{ 
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                top: 0,
                left: 0
              }}
            ></div>
            
            {/* Text overlay */}
            <div className="position-absolute bottom-0 start-0 end-0 p-4 text-white">
              <h3 className="fs-2 fw-bold mb-2">{slide.title}</h3>
              <p className="fs-5 mb-0" style={{ color: '#e0e0e0' }}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle p-2"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          backdropFilter: 'blur(10px)'
        }}
      >
        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle p-2"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          backdropFilter: 'blur(10px)'
        }}
      >
        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="d-flex justify-content-center mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`btn rounded-circle mx-1 ${
              index === currentSlide 
                ? 'bg-primary' 
                : 'bg-secondary'
            }`}
            style={{ 
              width: index === currentSlide ? '32px' : '12px',
              height: '12px',
              padding: 0,
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div 
        className="position-absolute top-0 end-0 bg-dark text-white px-3 py-1 rounded-2 me-3 mt-3"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.875rem'
        }}
      >
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

const Hero = ({ setCurrentPage }) => (
  <div 
    className="py-5 text-center text-white"
    style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      marginTop: '76px'
    }}
  >
    <div className="container">
      <h1 className="display-3 fw-bold mb-4">Find Your Inner Balance</h1>
      <p className="lead fs-4 mb-4">Join our yoga classes and workshops to nurture your body and mind</p>
      <button 
        className="btn btn-success btn-lg px-5 py-3 fw-semibold shadow-lg" 
        onClick={() => setCurrentPage('classes')}
        style={{
          borderRadius: '50px',
          fontSize: '1.2rem'
        }}
      >
        Book A Class Now
      </button>
      <div className="mt-5">
        <p className="fs-4 fw-light" style={{ fontStyle: 'italic', color: '#e8f4fd' }}>
          Breathe deeply. Move freely. Live fully.
        </p>
      </div>
    </div>
  </div>
);

const BookingModal = ({ show, onClose, yogaClass }) => {
  if (!yogaClass) return null;
  return (
    <div 
      className={`modal fade ${show ? 'show d-block' : 'd-none'}`} 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0 rounded-3">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold">Booking Details</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4">
            <div className="row g-3">
              <div className="col-12">
                <h6 className="text-muted mb-1">Class Title</h6>
                <p className="fw-semibold mb-3">{yogaClass.title}</p>
              </div>
              <div className="col-md-6">
                <h6 className="text-muted mb-1">Instructor</h6>
                <p className="mb-3">{yogaClass.instructor}</p>
              </div>
              <div className="col-md-6">
                <h6 className="text-muted mb-1">Level</h6>
                <p className="mb-3">
                  <span className={`badge ${
                    yogaClass.level === 'Beginner' ? 'bg-success' :
                    yogaClass.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                  }`}>
                    {yogaClass.level}
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <h6 className="text-muted mb-1">Date & Time</h6>
                <p className="mb-3">{yogaClass.date} at {yogaClass.time}</p>
              </div>
              <div className="col-md-6">
                <h6 className="text-muted mb-1">Price</h6>
                <p className="mb-3 fs-5 fw-bold text-success">£{yogaClass.price}</p>
              </div>
              <div className="col-12">
                <h6 className="text-muted mb-1">Availability</h6>
                <p className="mb-0">
                  <span className="badge bg-info me-2">{yogaClass.capacity - yogaClass.enrolled} spots left</span>
                  <small className="text-muted">out of {yogaClass.capacity} total spots</small>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary px-4" onClick={onClose}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClassCard = ({ yogaClass, onSelect }) => (
  <div className="card h-100 shadow-lg border-0 rounded-3 overflow-hidden">
    <img 
      src={yogaClass.image} 
      className="card-img-top" 
      alt={yogaClass.title}
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <div className="card-body p-4">
      <h5 className="card-title fw-bold text-primary">{yogaClass.title}</h5>
      <p className="card-text text-muted mb-2">
        <i className="fas fa-user me-2"></i><strong>Instructor:</strong> {yogaClass.instructor}
      </p>
      <p className="card-text">{yogaClass.description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>Level</span>
        <span className={`badge ${
          yogaClass.level === 'Beginner' ? 'bg-success' :
          yogaClass.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'
        }`}>
          {yogaClass.level}
        </span>
      </li>
      <li className="list-group-item">
        <i className="fas fa-calendar me-2 text-primary"></i>
        {yogaClass.date} at {yogaClass.time}
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span><i className="fas fa-clock me-2 text-primary"></i>{yogaClass.duration} min</span>
        <span className="fw-bold text-success fs-5">£{yogaClass.price}</span>
      </li>
    </ul>
    <div className="card-body p-4">
      <button 
        className="btn btn-primary w-100 py-2 fw-semibold shadow-sm" 
        onClick={() => onSelect(yogaClass)}
        style={{ borderRadius: '25px' }}
      >
        Book Now
      </button>
    </div>
  </div>
);

const FeaturedClasses = ({ classes, onClassSelect, setCurrentPage }) => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold text-dark mb-3">Featured Classes</h2>
      <p className="lead text-muted">Discover our most popular yoga classes designed for all levels</p>
    </div>
    <div className="row g-4">
      {classes.slice(0, 3).map(yogaClass => (
        <div key={yogaClass.id} className="col-lg-4 col-md-6">
          <ClassCard yogaClass={yogaClass} onSelect={onClassSelect} />
        </div>
      ))}
    </div>
    <div className="text-center mt-5">
      <button 
        className="btn btn-outline-primary btn-lg px-5" 
        onClick={() => setCurrentPage('classes')}
        style={{ borderRadius: '25px' }}
      >
        View All Classes
      </button>
    </div>
  </div>
);

const ClassFilterPage = ({ classes, onClassSelect }) => {
  const [filter, setFilter] = useState('');
  const filtered = filter ? classes.filter(c => c.level.includes(filter)) : classes;

  return (
    <div className="container py-5" style={{ marginTop: '76px' }}>
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-dark mb-3">All Yoga Classes</h2>
        <p className="lead text-muted">Find the perfect class for your level and schedule</p>
      </div>
      
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <select 
            className="form-select form-select-lg shadow-sm" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{ borderRadius: '25px' }}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      
      <div className="row g-4">
        {filtered.map(yogaClass => (
          <div key={yogaClass.id} className="col-lg-4 col-md-6">
            <ClassCard yogaClass={yogaClass} onSelect={onClassSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ name: "Jane Doe", email });
    }
  };

  return (
    <div className="container py-5" style={{ marginTop: '76px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-0 fw-bold">Welcome Back</h3>
              <p className="mb-0 mt-2" style={{ opacity: 0.9 }}>Sign in to your account</p>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={{ borderRadius: '10px' }}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    style={{ borderRadius: '10px' }}
                    placeholder="Enter your password"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 btn-lg fw-semibold shadow-sm"
                  style={{ borderRadius: '25px' }}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function YogaBookingApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedClass, setSelectedClass] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setCurrentPage("home");
  };

  const handleLogout = () => setCurrentUser(null);

  const handleClassSelect = (yogaClass) => {
    setSelectedClass(yogaClass);
    setShowModal(true);
  };

  return (
    <div>
      <Navigation currentUser={currentUser} onLogout={handleLogout} setCurrentPage={setCurrentPage} />
      
      {currentPage === "home" && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          
          {/* Image Gallery Section */}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-3">Experience Our Studio</h2>
                <p className="lead text-muted">Take a glimpse into our peaceful and inspiring yoga environment</p>
              </div>
              <ImageSlider />
            </div>
          </section>
          
          <FeaturedClasses classes={YOGA_CLASSES} onClassSelect={handleClassSelect} setCurrentPage={setCurrentPage} />
          
          <footer className="bg-dark text-white py-5 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <h5 className="fw-bold mb-3">ZenYoga Studio</h5>
                  <p className="text-muted">Your journey to inner peace and physical wellness starts here.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h6 className="fw-semibold mb-3">Quick Links</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
                    <li><a href="#" className="text-muted text-decoration-none">Classes</a></li>
                    <li><a href="#" className="text-muted text-decoration-none">About</a></li>
                    <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-4">
                  <h6 className="fw-semibold mb-3">Contact Info</h6>
                  <p className="text-muted mb-1">📍 123 Zen Street, Peaceful City</p>
                  <p className="text-muted mb-1">📞 (555) 123-4567</p>
                  <p className="text-muted mb-1">✉️ info@zenyogastudio.com</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="text-center">
                <p className="mb-0 text-muted">&copy; 2025 ZenYoga Studio. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
      
      {currentPage === "classes" && <ClassFilterPage classes={YOGA_CLASSES} onClassSelect={handleClassSelect} />}
      {currentPage === "login" && !currentUser && <LoginForm onLogin={handleLogin} />}
      <BookingModal show={showModal} onClose={() => setShowModal(false)} yogaClass={selectedClass} />
    </div>
  );
}
