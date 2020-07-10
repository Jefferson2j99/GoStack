import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityServic from '@modules/appointments/services/ListProviderMonthAvaliabilityService';

export default class ProvidersMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const {  month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityServic
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
