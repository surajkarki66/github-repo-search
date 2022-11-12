export  type Repository = {
    id: string;
    name: string;
    owner: {login: string}
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    description: string;
    updated_at: Date;
}
export  type RepositoryDetails = {
    owner: {login:string,html_url: string};
    name: string;
    open_issues_count: number;
    default_branch: string;
    html_url: string;
}