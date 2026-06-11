interface User {
  email: string;
  password: string;
  name: string;
}

const STORAGE_KEY = 'project_as_users';

function getUsers(): User[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveUsers(users: User[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export const UserService = {
  userExists: (email: string): boolean => {
    const users = getUsers();
    return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
  },

  createUser: (email: string, password: string, name: string): boolean => {
    if (UserService.userExists(email)) {
      return false;
    }
    const users = getUsers();
    users.push({ email, password, name });
    saveUsers(users);
    return true;
  },

  validateLogin: (email: string, password: string): boolean => {
    const users = getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    return user ? user.password === password : false;
  },

  getUser: (email: string): User | null => {
    const users = getUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  }
};
