import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import AuthPage from "./pages/AuthPage";
import PostsListPage from "./pages/PostsListPage";
import AboutPage from "./pages/AboutPage";

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
      <Routes>
        <Route path="/main" element={<PostsListPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
