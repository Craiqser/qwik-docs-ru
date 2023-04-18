import { component$, useStore, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <article>
      В этом примере представлен компонент автозаполнения с задержкой 150 мс.
      <br />
      Функция `debouncedGetPeople` должна быть экспортирована, поскольку она используется в `useTask$`.
      <br />
      <br />
      Ищите персонажей Звёздных войн, например "Luke Skywalker", с помощью{' '}
      <a href="https://swapi.dev/">API Звёздных войн</a>
      <AutoComplete></AutoComplete>
    </article>
  );
});

interface IState {
  searchInput: string;
  searchResults: string[];
  selectedValue: string;
}

export const AutoComplete = component$(() => {
  const state = useStore<IState>({
    searchInput: '',
    searchResults: [],
    selectedValue: '',
  });

  useTask$(async ({ track }) => {
    const searchInput = track(() => state.searchInput);

    if (!searchInput) {
      state.searchResults = [];
      return;
    }

    const controller = new AbortController();
    state.searchResults = await debouncedGetPeople(state.searchInput, controller);

    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <input
        type="text"
        onInput$={(ev) => (state.searchInput = (ev.target as HTMLInputElement).value)}
      />
      <SuggestionsListComponent state={state}></SuggestionsListComponent>
    </div>
  );
});

export const SuggestionsListComponent = (props: { state: IState }) => {
  const searchResults = props.state.searchResults;
  return searchResults?.length ? (
    <ul>
      {searchResults.map((suggestion) => {
        return <li onClick$={() => (props.state.selectedValue = suggestion)}>{suggestion}</li>;
      })}
    </ul>
  ) : (
    <p class="no-results">
      <em>Никаких предположений, вы сами по себе!</em>
    </p>
  );
};

const getPeople = (searchInput: string, controller?: AbortController): Promise<string[]> =>
  fetch(`https://swapi.dev/api/people/?search=${searchInput}`, {
    signal: controller?.signal,
  })
    .then((response) => {
      return response.json();
    })
    .then((parsedResponse) => {
      return parsedResponse.results.map((people: { name: string }) => people.name);
    });

function debounce<F extends (...args: any[]) => any>(fn: F, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>): Promise<ReturnType<F>> => {
    return new Promise((resolve) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
}

export const debouncedGetPeople = debounce(getPeople, 150);
