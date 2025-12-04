import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Experion Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              • Assisted in developing modular frontend components using JavaScript, React.js, and HTML/CSS, enhancing UI responsiveness and cross-browser compatibility.
              • Implemented REST API integrations using Node.js & Express.js, supporting vehicle tracking, route updates, and driver status synchronization.
              • Collaborated with senior developers to design and optimize SQL database schemas (MySQL) for managing fleet, driver, and shipment data.
              • Participated in daily Agile/Scrum standups, contributing to sprint planning, task estimation, and feature reviews.
              • Performed debugging, unit testing, and issue resolution using Postman, Jest, and Chrome DevTools, reducing UI/API defects before release.
              • Contributed to writing technical documentation, including API usage guides and feature implementation notes, improving cross-team communication.
              • Supported deployment activities in Git/GitHub and CI/CD pipelines, ensuring smooth code integration and continuous delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security Software Developer</h4>
                <h5>HP Inc.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Developed and maintained advanced backend security monitoring and diagnostic tools using C#/.NET, enabling real-time tracking of firmware integrity, hardware trust states, and enterprise-wide device security compliance across large-scale deployments.
              • Enhanced and expanded internal engineering dashboards using HTML, Bootstrap, JavaScript, and jQuery, improving visualization of device health, security metrics, anomaly trends, and firmware telemetry for operational teams.
              • Automated end-to-end CI/CD workflows in Azure DevOps, optimizing build pipelines, validation scripts, and deployment sequencing, resulting in a 30% reduction in release cycle time and significantly improved release reliability.
              • Implemented robust TPM-based validation logic, secure boot verification, and trust-level authentication mechanisms to detect device tampering, validate firmware authenticity, and strengthen enterprise device integrity workflows.
              • Developed high-performance C++ utilities and PowerShell automation scripts to streamline firmware provisioning, deployment verification, post-update security audits, and hardware policy enforcement across multiple device models.
              • Collaborated closely with firmware, platform, cybersecurity, and systems engineering teams to troubleshoot integrity failures, mitigate vulnerabilities, enhance monitoring pipelines, and support secure enterprise hardware lifecycle processes.
              • Authored comprehensive technical documentation covering system architecture diagrams, secure deployment procedures, test ca
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Cardinal Health</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
            • Developed and enhanced scalable, user-centric frontend modules using React.js, TypeScript, Redux, and Tailwind CSS, improving the product browsing, filtering, and checkout journey across high-traffic e-commerce pages.
            • Engineered and optimized backend microservices using Node.js, Express.js, and Java (Spring Boot) to support real-time inventory synchronization, dynamic pricing updates, and personalized recommendation logic.
            • Designed, integrated, and maintained REST and GraphQL APIs, ensuring seamless and high-performance data communication between product catalogs, recommendation engines, and customer-facing applications.
            • Implemented advanced performance optimization techniques such as lazy loading, server-side caching, memoization, and asynchronous processing, reducing page load latency and API response time by over 30%.
            • Managed complex data operations using PostgreSQL, MongoDB, and Redis, creating efficient schemas, improving query performance, and handling high-volume product metadata and customer personalization datasets.
            • Automated cloud-native deployments using GitHub Actions, Docker containers, and Kubernetes clusters, ensuring reliable, scalable, and zero-downtime releases across multiple environments.
            • Collaborated closely with cross-functional UX designers, product managers, QA teams, and data engineers in Agile/Scrum ceremonies to deliver sprint features, resolve functional defects, and continuously improve platform reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
