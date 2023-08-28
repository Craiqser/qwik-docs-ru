import { $, component$, useOnWindow, useSignal } from '@builder.io/qwik';

// Пользовательский хук для управления состоянием раскрывающегося списка. Прослушивает события клика в окне.
// Если выбранный элемент не является кнопкой переключения раскрывающегося списка, он закрывает раскрывающийся список.
function useCloseDropdown() {
  // Сигнал для управления состоянием открытия/закрытия раскрывающегося списка.
  const isOpen = useSignal(false);
  // Сигнал для хранения ссылки на кнопку переключения раскрывающегося списка.
  const dropdownToggleBtn = useSignal<HTMLElement | null>(null);

  // Функция прослушивания события клика по окну.
  const closeDropdown = $((event: Event): void => {
    // Если выбранный элемент не содержится в кнопке переключения раскрывающегося списка, закрываем раскрывающийся список.
    if (
      dropdownToggleBtn.value &&
      !dropdownToggleBtn.value.contains(event.target as Node)
    ) {
      isOpen.value = false;
    }
  });
  // Подключаем слушатель события клика окна.
  useOnWindow('click', closeDropdown);

  return {
    isOpen,
    dropdownToggleBtn,
  };
}

export default component$(() => {
  // Используем пользовательский хук в компоненте.
  const { isOpen, dropdownToggleBtn } = useCloseDropdown();

  // Функция установки ссылки на кнопку переключения раскрывающегося списка.
  const setDropdownToggleBtnRef = (item: Element): void => {
    dropdownToggleBtn.value = item as HTMLElement;
  };

  return (
    <div>
      <button
        ref={setDropdownToggleBtnRef}
        onClick$={() => (isOpen.value = true)}
      >
        Нажми меня!
      </button>
      {isOpen.value && (
        <>
          <div>
            <i>Список открыт!</i>
          </div>
          <div style={{ margin: '1.5rem', marginLeft: '1.5rem' }}>
            <b>КЛИКНИ СНАРУЖИ</b>
          </div>
        </>
      )}
    </div>
  );
});
