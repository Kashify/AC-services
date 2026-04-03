import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="group h-full">
      <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 h-full border border-gray-100 hover:border-blue-200">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 mb-6 flex h-16 w-16 items-center justify-center rounded-lg group-hover:scale-110 transition duration-300">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
