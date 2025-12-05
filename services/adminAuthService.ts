import { AdminUser } from '../types';

const ADMIN_USERS_KEY = 'admin_users_db';
const ADMIN_SESSION_KEY = 'admin_session_token';

class AdminAuthService {
    // Initialize default admin
    constructor() {
        // Để đảm bảo bạn luôn có tài khoản để test, tôi sẽ reset lại danh sách Admin 
        // mỗi khi ứng dụng tải lại.
        // Credentials: admin / admin123
        const defaultAdmin: AdminUser = { username: 'admin', password: 'admin123' };

        // Ghi đè lại localStorage để chắc chắn tài khoản này tồn tại
        localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify([defaultAdmin]));
    }

    getUsers(): AdminUser[] {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem(ADMIN_USERS_KEY) || '[]');
    }

    login(username: string, password: string): boolean {
        const users = this.getUsers();
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Set simple session
            localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ username: user.username, timestamp: Date.now() }));
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem(ADMIN_SESSION_KEY);
    }

    isAuthenticated(): boolean {
        const session = localStorage.getItem(ADMIN_SESSION_KEY);
        if (!session) return false;

        // Optional: Check session expiry (e.g., 24 hours)
        try {
            const parsed = JSON.parse(session);
            const now = Date.now();
            // 24 hours in ms
            if (now - parsed.timestamp > 86400000) {
                this.logout();
                return false;
            }
            return true;
        } catch {
            return false;
        }
    }

    getCurrentUser(): string | null {
        const session = localStorage.getItem(ADMIN_SESSION_KEY);
        if (!session) return null;
        try {
            return JSON.parse(session).username;
        } catch {
            return null;
        }
    }
}

export const adminAuthService = new AdminAuthService();