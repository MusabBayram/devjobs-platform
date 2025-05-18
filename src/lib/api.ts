
export interface BusinessPost {
    id: number;
    name: string;
    company: string;
    image: string;
    headline: string;
    date: string;
}

export async function getBusinessPosts(): Promise<BusinessPost[]> {
    const res = await fetch("https://dummyjson.com/users?limit=10");

    if (!res.ok) {
        throw new Error("Failed to fetch business posts");
    }

    const data = await res.json();

    const posts: BusinessPost[] = data.users.map((user: any) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        company: user.company?.name ?? "Unknown Inc.",
        image: user.image,
        headline: "Excited to share some updates from our latest project!",
        date: new Date().toISOString().split("T")[0],
    }));

    return posts;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export async function getPosts(): Promise<Post[]> {
    const res = await fetch("https://dummyjson.com/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return data.posts;
}

export interface Job {
    id: number;
    title: string;
    company_name: string;
    candidate_required_location: string;
    publication_date: string;
    salary: string;
    job_type: string;
    url: string;
    description: string;
    category: string;
    tags: string[];
    company_logo_url: string;
}

export async function getJobs(): Promise<Job[]> {
    const res = await fetch("https://remotive.io/api/remote-jobs");

    if (!res.ok) {
        throw new Error("Failed to fetch jobs");
    }

    const data = await res.json();
    return data.jobs;
}