import { getConfigData } from "../data/configReader";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

export default function Home() {
  const configData = getConfigData();
  const projects = configData.projects;

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
        <div className="font-medium text-lg flex items-center gap-x-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Projects
        </div>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ul
              key={index}
              className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
            >
              <li>
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block w-fit">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project["project-image-url"]}
                      alt={project["project-name"]}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    {project["project-name"]}
                  </h1>
                  <p className="text-gray-500 text-md">
                    {project["project-desc"]}
                  </p>
                  <p className="text-gray-500 text-md">
                    Year: {project["project-year"]}
                  </p>
                  {project["project-images"] && project["project-images"].length > 0 && (
                    <div className="flex justify-center mt-2">
                      <Carousel showThumbs={false}>
                        {project["project-images"].map((image, i) => (
                          <div key={i} style={{ height: '300px' }}> {/* Set fixed height */}
                            <img
                              className="w-full h-full object-contain border border-gray-200 hover:border-gray-300"
                              src={image}
                              alt={`Image ${i + 1}`}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  )}
                  <details>
                    <summary>Read more about this project</summary>
                    <div className="mt-2">
                      <p>{project["project-detail"]}</p>
                    </div>
                  </details>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    <a
                      href={project["project-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
