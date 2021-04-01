import { StackOverflowQuestion } from "../interfaces/stackOverflowQuestion";

export async function GetStackOverflowQuestionsByTag(tag: string): Promise<StackOverflowQuestion[]> {
    const response = await fetch(`https://api.stackexchange.com/2.2/questions?pagesize=8&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`);
    const data = await response.json();
    return data.items as StackOverflowQuestion[];
}