import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Calendar, Clock, Users } from 'lucide-react';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  gameType: z.string().min(1, 'Please select a game type'),
  sessionType: z.string().min(1, 'Please select a session type'),
  playerCount: z.number().min(1).max(8, 'Maximum 8 players allowed'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  experience: z.string().min(1, 'Please select your experience level'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Reservation request submitted successfully! We\'ll contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit reservation. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Adventure</h2>
        <p className="text-gray-600">Fill out the form below to reserve your spot at our table.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="playerCount" className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Number of Players *
            </label>
            <select
              {...register('playerCount', { valueAsNumber: true })}
              id="playerCount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select player count</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} Player{num > 1 ? 's' : ''}</option>
              ))}
            </select>
            {errors.playerCount && <p className="mt-1 text-sm text-red-600">{errors.playerCount.message}</p>}
          </div>

          <div>
            <label htmlFor="gameType" className="block text-sm font-medium text-gray-700 mb-2">
              Game System *
            </label>
            <select
              {...register('gameType')}
              id="gameType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select a game system</option>
              <option value="dnd5e">Dungeons & Dragons 5e</option>
              <option value="pathfinder">Pathfinder 2e</option>
              <option value="callofcthulhu">Call of Cthulhu</option>
              <option value="vampire">Vampire: The Masquerade</option>
              <option value="cyberpunk">Cyberpunk Red</option>
              <option value="other">Other (specify in special requests)</option>
            </select>
            {errors.gameType && <p className="mt-1 text-sm text-red-600">{errors.gameType.message}</p>}
          </div>

          <div>
            <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
              Session Type *
            </label>
            <select
              {...register('sessionType')}
              id="sessionType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select session type</option>
              <option value="oneshot">One-Shot (Single Session)</option>
              <option value="campaign">Campaign (Multiple Sessions)</option>
              <option value="mini-campaign">Mini-Campaign (3-5 Sessions)</option>
            </select>
            {errors.sessionType && <p className="mt-1 text-sm text-red-600">{errors.sessionType.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Preferred Date *
            </label>
            <input
              {...register('preferredDate')}
              type="date"
              id="preferredDate"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.preferredDate && <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Preferred Time *
            </label>
            <select
              {...register('preferredTime')}
              id="preferredTime"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
              <option value="evening">Evening (6:00 PM - 10:00 PM)</option>
              <option value="late">Late Night (7:00 PM - 11:00 PM)</option>
            </select>
            {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level *
          </label>
          <select
            {...register('experience')}
            id="experience"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select your experience level</option>
            <option value="beginner">Beginner (New to TTRPGs)</option>
            <option value="novice">Novice (Some experience)</option>
            <option value="intermediate">Intermediate (Regular player)</option>
            <option value="advanced">Advanced (Experienced player)</option>
            <option value="veteran">Veteran (Very experienced)</option>
          </select>
          {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests or Notes
          </label>
          <textarea
            {...register('specialRequests')}
            id="specialRequests"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Any special requests, dietary restrictions, accessibility needs, or additional information..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Reservation Request'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;