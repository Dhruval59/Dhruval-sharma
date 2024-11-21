export default function About() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-300 dark:bg-gray-600 text-black dark:text-white">
        <div className="text-center p-6 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <div className="text-lg">
          <p>
          I'm <span className="font-bold">Dhruval Sharma</span>, a dedicated Site Reliability Engineer specialized in cloud technologies, predominantly AWS. With a strong focus on automation and problem-solving, I thrive in building efficient and scalable systems.
        </p>
        <p className="text-lg mb-4">
          I bring expertise in <b>Python</b>, <b>Java</b>, and cloud tools like <b>Terraform</b> and <b>Kubernetes</b>, coupled with a knack for fostering seamless <b>CI/CD</b> pipelines.
        </p>
        <p className="text-lg">
          Beyond technical skills, I am a collaborative team player with strong leadership qualities, always eager to contribute to innovative projects and resolve complex challenges.
        </p>
          </div>
        </div>
      </div>
    );
}
