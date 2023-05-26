import { Repository } from 'typeorm';
import { Intention } from '../entity/intention';


export class IntentionRepository extends Repository<Intention> {
  
    async createIntention(intentionData: Intention): Promise<Intention> {
        const intention = this.create(intentionData);
        return this.save(intention);
    }

    async updateIntention(intentionId: number, intentionData: Partial<Intention>): Promise<Intention | undefined> {
        await this.update(intentionId, intentionData);
        const updatedIntention = await this.findOne({ where: { id: intentionId } });
        
        if (updatedIntention === null) {
            return undefined;
        }
        
        return updatedIntention;
    }      

    async deleteIntention(intentionId: number): Promise<boolean> {
        const result = await this.delete(intentionId);
        return result.affected !== 0;
    }      
    
    async getAllIntentions(): Promise<Intention[]> {
        return this.find();
    }
      
}

export default IntentionRepository;