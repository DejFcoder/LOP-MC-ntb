import { FC } from "react";
import Layout from "../../layouts/Layout";

interface Package1Props {}

const Package1: FC<Package1Props> = () => {
  return (
    <Layout>
      <div className="min-h-96 w-full flex justify-center items-center">
        <h1 className="text-5xl dark:text-white font-bold">Package</h1>
      </div>
      <div className="min-h-40 w-full flex justify-center items-center">
        {/* Add content for the second section if needed */}
      </div>
    </Layout>
  );
};

export default Package1;
