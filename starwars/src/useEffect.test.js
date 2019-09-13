import axios from "axios";
import { act } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";
import { currentPage } from "./App";

test("useEffect performs GET request", () => {
  const initialValue = [];
  const mock = new MockAdapter(axios);

  const mockData = "response";
  const url = `https://swapi.co/api/people?page=${currentPage}`;
  

  act(() => {
    mock.onGet(url).reply(200, mockData);
  });

  expect(mockData.data.results).toBe(initialValue.length > 1);
});
