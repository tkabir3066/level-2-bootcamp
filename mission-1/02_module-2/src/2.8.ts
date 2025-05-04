{
  // ----------------------------Start----------------------------//
  //Asynchronous in typescript
  //promise

  /* const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling the promise

  const showData = async (): Promise<string> => {
    const data = await createPromise();
    // console.log(data);
    return data;
  };

  showData(); */

  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling the promise

  const showData = async (): Promise<Something> => {
    const data = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  //   fetch API

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    // console.log(data);

    return data;
  };

  getTodo();
  // ----------------------------End----------------------------//
}
