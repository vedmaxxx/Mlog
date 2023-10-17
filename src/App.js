import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import AuthPage from "./pages/AuthPage";
import PostListPage from "./pages/PostListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "./index";
import { useContext } from "react";
import EditPostPage from "./pages/EditPostPage";

function App() {
  // TODO:
  // Сортировка постов по дате/лайкам/просмотрам
  // Панель создания поста / редактирования - как пользователь
  // Панель управления постами (удаление/редактирование) - как админ
  // Вывод комментариев под пост (могут оставлять обычные пользователи)

  // СТРАНИЦЫ:
  // Основная страница - перечень постов (сортируется)
  // Страница поста
  // Страница аккаунта - статистика
  // Страница авторизации/регистрации
  // Страница создания/редактирования  поста
  // Страница удаления блогов (админ-панель)

  // ИДЕИ:
  // Добавить категории к постам (с иконкой: vc.ru)
  // Сделать два вида карточки поста:
  // - маленькие: вывод списком, по 6 в ряд
  // - большие: типа лента новостей
  const { users } = useContext(Context);
  console.log("Путь к серверу: ", process.env.REACT_APP_BASE_URL);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          {users.loggedIn && (
            <Route path="/profile" element={<ProfilePage />} />
          )}
          {users.loggedIn && (
            <Route path="/edit/:id" element={<EditPostPage mode={"edit"} />} />
          )}
          {users.loggedIn && (
            <Route path="/create" element={<EditPostPage mode={"create"} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
