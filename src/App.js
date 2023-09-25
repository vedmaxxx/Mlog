import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import AuthPage from "./pages/AuthPage";
import PostsListPage from "./pages/PostsListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const loggedIn = false;

  return (
    <div className="App">
      <NavBar />
      <div>byaj</div>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          {loggedIn && <Route path="/profile" element={<ProfilePage />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
