import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Armed Police Battalion Public School and College, Bogura",
    year: "Completed",
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Begum Rokeya University, Rangpur",
    year: "Currently Studying",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {edu.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
