import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
const JoinC = () => {
  const [activeTab, setActiveTab] = useState('internal');
  const { t } = useTranslation();


  const internalJobs = [
    {
      title: t("join_us.jobs.internal.job1.title"),
      subtitle: t("join_us.jobs.internal.job1.subtitle"),
      location: t("join_us.jobs.internal.job1.location")
    },
    {
      title: t("join_us.jobs.internal.job2.title"),
      subtitle: t("join_us.jobs.internal.job2.subtitle"),
      location: t("join_us.jobs.internal.job2.location")
    },
    {
      title: t("join_us.jobs.internal.job3.title"),
      subtitle: t("join_us.jobs.internal.job3.subtitle"),
      location: t("join_us.jobs.internal.job3.location")
    },
    {
      title: t("join_us.jobs.internal.job4.title"),
      subtitle: t("join_us.jobs.internal.job4.subtitle"),
      location: t("join_us.jobs.internal.job4.location")
    },
    {
      title: t("join_us.jobs.internal.job5.title"),
      subtitle: t("join_us.jobs.internal.job5.subtitle"),
      location: t("join_us.jobs.internal.job5.location")
    }
  ];

  const externalJobs = [
    {
      title: t("join_us.jobs.external.job1.title"),
      subtitle:  t("join_us.jobs.external.job1.subtitle"),
      location: t("join_us.jobs.external.job1.location")
    },
    {
      title: t("join_us.jobs.external.job2.title"),
      subtitle:  t("join_us.jobs.external.job2.subtitle"),
      location: t("join_us.jobs.external.job2.location")
    },
    {
      title: t("join_us.jobs.external.job3.title"),
      subtitle: t("join_us.jobs.external.job3.subtitle"),
      location: t("join_us.jobs.external.job3.location")
    }
  ];

  const currentJobs = activeTab === 'internal' ? internalJobs : externalJobs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-full mx-4 md:mx-20 p-6"
    >
      {/* postes */}
      <div className="mb-6">
        <h3 className="text-blue-600 text-xl md:text-2xl font-medium mb-2">{t("join_us.jobs.subtitle")}</h3>
        <h2 className="text-black text-2xl md:text-4xl mt-5 font-bold mb-7">{t("join_us.jobs.title")}</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('internal')}
            className={`px-4 py-2 text-base md:text-xl font-medium rounded ${
              activeTab === 'internal'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
           {t("join_us.jobs.tabs.internal")}
          </button>
          <button
            onClick={() => setActiveTab('external')}
            className={`px-4 py-2 text-base md:text-xl font-medium rounded ${
              activeTab === 'external'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
           {t("join_us.jobs.tabs.external")}
          </button>
        </div>
      </div>

      {/* liste des boulots */}
      <div className="space-y-4">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex-1 mb-2 md:mb-0">
              <h4 className="text-black font-semibold text-lg md:text-xl mb-1">{job.title}</h4>
              <p className="text-gray-500 text-base md:text-lg">{job.subtitle}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-700 text-base md:text-lg">{job.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* en bas */}
      <div className="mt-8">
        <h3 className="text-green-600 text-xl md:text-2xl font-medium mb-2">{t("join_us.jobs.talent_pool.title")}</h3>
        <p className="text-gray-600 text-base md:text-lg">
          {t("join_us.jobs.talent_pool.description")}{" "}<span className='text-blue-500 cursor-pointer'>{t("join_us.jobs.talent_pool.link")}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default JoinC;
