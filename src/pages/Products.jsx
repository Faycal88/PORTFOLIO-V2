import { getConfigData } from "../data/configReader";

export default function Skills() {
  // Get skills data from config
  const configData = getConfigData();
  const skills = configData.skills;

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-32 mr-4">{skill.name}</div>
            <div className="flex-grow h-4 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}