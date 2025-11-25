import { LogEntry } from '../types';

const LOG_STORAGE_KEY = 'system_logs';

class LoggerService {
  private getLogs(): LogEntry[] {
    const stored = localStorage.getItem(LOG_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private saveLog(entry: LogEntry) {
    const logs = this.getLogs();
    // Keep only last 200 logs to prevent overflow
    const newLogs = [entry, ...logs].slice(0, 200); 
    localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(newLogs));
  }

  public info(event: string, details?: any) {
    const entry: LogEntry = {
      id: Date.now().toString() + Math.random().toString().slice(2, 5),
      timestamp: new Date().toISOString(),
      level: 'INFO',
      event,
      details
    };
    console.log(`[INFO] ${event}`, details || '');
    this.saveLog(entry);
  }

  public error(event: string, error?: any) {
    const entry: LogEntry = {
      id: Date.now().toString() + Math.random().toString().slice(2, 5),
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      event,
      details: error instanceof Error ? error.message : error
    };
    console.error(`[ERROR] ${event}`, error || '');
    this.saveLog(entry);
  }

  public warn(event: string, details?: any) {
    const entry: LogEntry = {
      id: Date.now().toString() + Math.random().toString().slice(2, 5),
      timestamp: new Date().toISOString(),
      level: 'WARN',
      event,
      details
    };
    console.warn(`[WARN] ${event}`, details || '');
    this.saveLog(entry);
  }

  public getAllLogs(): LogEntry[] {
    return this.getLogs();
  }

  public clearLogs() {
    localStorage.removeItem(LOG_STORAGE_KEY);
  }
}

export const logger = new LoggerService();