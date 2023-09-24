import "./App.css";
import AuthorisationForm from "./components/AuthorisationForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  // TODO:
  // Сортировка постов по дате/лайкам/просмотрам
  // Панель создания поста редактирования - как пользователь
  // Панель управления постами (удаление/редактирование) - как админ
  // Вывод комментариев под пост (могут оставлять обычные пользователи)

  // СТРАНИЦЫ:
  // Основная страница - перечень постов (сортируется)
  // Страница поста
  // Страница аккаунта - статистика
  // Страница авторизации/регистрации
  // Страница создания/редактирования  поста
  // Страница удаления блогов (админ-панель)
  return (
    <div className="App">
      <AuthorisationForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
