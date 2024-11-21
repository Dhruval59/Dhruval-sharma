export default function Projects() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-300 dark:bg-gray-600 text-black dark:text-white">
        <div className="text-center p-6 w-full">
          <h1 className="text-3xl font-bold mb-6">Projects</h1>
          <p className="text-lg mb-6">
            Here are some of my exciting projects showcasing modern tools, frameworks, and problem-solving techniques.
          </p>
          {/* Project 1 */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Complete CI/CD Pipeline</h3>
            <p className="text-lg mb-4">
              Developed a complete CI/CD pipeline for a Java application, using Jenkins to build Docker images and deploying on Kubernetes using ArgoCD.
            </p>
            
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-slate-600 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AWS Cloud Automation</h3>
            <p className="text-lg mb-4">
              Automated AWS infrastructure provisioning using Terraform, streamlining the setup of EC2 instances, S3 buckets, and RDS databases.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Microservices with Docker & Kubernetes</h3>
            <p className="text-lg mb-4">
              Created a set of microservices for a mock e-commerce application, containerized them with Docker, and orchestrated deployment using Kubernetes.
            </p>
            
          </div>
        </div>
      </div>
    );
  }
  