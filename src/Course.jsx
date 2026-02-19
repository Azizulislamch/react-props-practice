function Course() {
  return (
    <div className="course-card">
      <h2 className="course-title">React Course</h2>

      <p className="course-duration">
        ⏱ Duration: <span>2 hours</span>
      </p>

      <div className="course-fee">
        💰 Price: <span>200 Tk</span>
      </div>

      <button className="enroll-btn">Enroll Now</button>
    </div>
  );
}

export default Course;
