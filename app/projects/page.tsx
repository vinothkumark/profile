// import project from '../../sanity/'
import { client } from "../lib/sanity"
import Image from 'next/image';

interface Data {
    title: string,
    link: string,
    id: string,
    imageUrl: string
}

async function getProjects() {
    const query = `*[_type=='project'] {
        title,
          overview,
          link,
          _id,
          "imageUrl": Image.asset->url
      }`

    const data = await client.fetch(query);
    return data;
}


export default async function Projects() {
    const data: Data[] = await getProjects();
    // console.log(data);
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-light text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Projects</h1>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 p-8">
                    {data?.map((projects: any) => (
                        <article key={projects._id} className="overflow-hidden dark:border-zinc-600 rounded-lg bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
                            <div className="h-56 w-full relative">
                                <Image src={projects.imageUrl} fill alt={projects.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <a href={projects.link} target="_blank">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        {projects.title}
                                    </h3>
                                </a>
                                <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{projects.overview}
                                </p>
                                <a href={projects.link} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500">
                                    Read More
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>)
}