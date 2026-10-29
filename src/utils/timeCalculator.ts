import { TimeElapsed } from '../types';

/**
 * Calcula o tempo decorrido desde a data de início do relacionamento até a data atual.
 * 
 * Atende aos requisitos da Seção 5:
 * - Data fixa de referência: 25/04/2025
 * - Anos completos de relacionamento
 * - Semanas completas transcorridas (após contabilizar anos completos)
 * - Dias restantes após contabilização das semanas
 * - Total acumulado de dias de relacionamento (em destaque)
 * - Coerência e consistência temporal entre as unidades
 */
export function calculateTimeElapsed(startDateStr: string, targetDate: Date = new Date()): TimeElapsed {
  const start = new Date(startDateStr);
  const now = targetDate;

  const diffMs = now.getTime() - start.getTime();

  if (diffMs < 0) {
    // Data ainda no futuro (caso seja testado antes de 25/04/2025)
    return {
      years: 0,
      weeks: 0,
      remainingDays: 0,
      totalDays: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFuture: true,
    };
  }

  // Total acumulado em dias
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Cálculo de anos completos de aniversário
  let years = now.getFullYear() - start.getFullYear();
  const anniversaryThisYear = new Date(start);
  anniversaryThisYear.setFullYear(start.getFullYear() + years);

  if (now.getTime() < anniversaryThisYear.getTime()) {
    years -= 1;
  }

  // Data do último aniversário completo
  const lastAnniversary = new Date(start);
  lastAnniversary.setFullYear(start.getFullYear() + Math.max(0, years));

  // Diferença após o último aniversário em milissegundos
  const diffAfterYearsMs = now.getTime() - lastAnniversary.getTime();
  const daysAfterYears = Math.floor(diffAfterYearsMs / (1000 * 60 * 60 * 24));

  // Semanas e dias restantes
  const weeks = Math.floor(daysAfterYears / 7);
  const remainingDays = daysAfterYears % 7;

  // Horas, minutos e segundos adicionais para atualização viva
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return {
    years: Math.max(0, years),
    weeks,
    remainingDays,
    totalDays,
    hours,
    minutes,
    seconds,
    isFuture: false,
  };
}

/**
 * Formata data no formato brasileiro dd/mm/aaaa
 */
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
