import { Navigate, Route, Routes } from "react-router-dom";
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
import { Context } from "./index";
import { useContext } from "react";

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

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          {users.loggedIn && (
            <Route path="/profile" element={<ProfilePage />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
