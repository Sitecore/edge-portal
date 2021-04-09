import { StackOverflowQuestion } from "../interfaces/stackOverflowQuestion";

export async function GetStackOverflowQuestionsByTag(
  tag: string
): Promise<StackOverflowQuestion[]> {
  const stackOverflowAPIUrl = `https://api.stackexchange.com/2.2/questions?pagesize=8&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`;
  const response = await fetch(stackOverflowAPIUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(handleError);

  return response.items as StackOverflowQuestion[];
}

var handleError = function (error: Error) {
  console.log(
    "There has been a problem with your fetch operation: " + error.message
  );
};
