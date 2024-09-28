function createCoursePromo(
  title,
  description,
  courseLink,
  lessonLink,
  imageUrl
) {
  const promoHTML = `
    <section class="course-promo">
      <div class="course-promo-content">
        <h3 class="course-promo-title">${title}</h3>
        <p class="course-promo-text">${description}</p>
        <div class="course-promo-cta">
          <a href="${courseLink}" class="course-promo-button">Explore Full Course</a>
          <a href="${lessonLink}" class="course-promo-link">View This Lesson</a>
        </div>
      </div>
      <div class="course-promo-image">
        <img src="${imageUrl}" alt="Course Preview" />
      </div>
    </section>
  `;

  return promoHTML;
}

// Example usage:
// document.getElementById('course-promo-container').innerHTML = createCoursePromo(
//   "Want to dive deeper into React's magic?",
//   "Unlock the full potential of React and master concepts like the Virtual DOM, component lifecycle, and state management. Our comprehensive course covers this topic and much more!",
//   "#course-link",
//   "#lesson-link",
//   "https://via.placeholder.com/300x200?text=React+Mastery+Course"
// );

function createModals() {
  const modalHTML = `
    <div id="timed-modal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-header">
          <h2 class="modal-title">React Rush: Turbocharging React JS Skills</h2>
        </div>
        <div class="modal-body">
          <div class="modal-thumbnail">
            <img src="/src/img/course-thumbnail.jpeg" alt="Course Thumbnail" />
          </div>
          <div class="modal-offer">
            <div class="offer-label">Hacktober Fest Discount</div>
            <h3 class="offer-title">Get up to <span class="highlight">60% Off</span> on this course</h3>
            <p class="offer-validity">Offer <span class="highlight">Valid till 2nd October</span>, price will increase after</p>
          </div>
          <div class="modal-pricing">
            <div class="price-tag">
              <span class="current-price">₹999</span>
              <span class="original-price">₹2,599</span>
            </div>
            <div class="discount-badge">60% OFF</div>
          </div>
          <ul class="modal-features">
            <li>Includes all video content</li>
            <li>Access to community</li>
            <li>Community discussions</li>
            <li>Problem challenges included with the course</li>
          </ul>
        </div>
        <div class="modal-footer">
          <a href="https://algorythm.rpy.club/cohort/WCdlL6Ahjh" class="modal-cta">Book your seat</a>
        </div>
      </div>
    </div>
  `;

  // Create a container for the modal
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);

  // Function to toggle body scroll
  function toggleBodyScroll(disable) {
    if (disable) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }

  // Timed modal
  setTimeout(function () {
    document.getElementById("timed-modal").style.display = "block";
    toggleBodyScroll(true);
  }, 5000); // Shows after 1 second

  // Close button functionality for the modal
  var closeButton = document.querySelector(".close");
  closeButton.onclick = function () {
    document.getElementById("timed-modal").style.display = "none";
    toggleBodyScroll(false);
  };

  // Close modal if clicked outside of it
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
      toggleBodyScroll(false);
    }
  };
}
