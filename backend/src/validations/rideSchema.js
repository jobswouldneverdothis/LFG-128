import { z } from 'zod';

export const createRideSchema = z.object({
  body: z.object({
    origin: z.string().min(2, 'Origin must be at least 2 characters'),
    destination: z.string().min(2, 'Destination must be at least 2 characters'),
    date: z.string().datetime('Invalid date format'),
    time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
    seats: z.number().int().min(1).max(8),
    price: z.number().positive('Price must be positive')
  })
});

export const searchRideSchema = z.object({
  query: z.object({
    origin: z.string().min(2).optional(),
    destination: z.string().min(2).optional(),
    date: z.string().datetime().optional()
  })
});