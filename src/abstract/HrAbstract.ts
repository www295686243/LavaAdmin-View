import { PromiseResult } from '@/plugins/axios'
import { ListItem } from '@/service/SqlService'
import BaseAbstract from './BaseAbstract'

export default abstract class HrAbstract extends BaseAbstract {
  abstract index(params: { page: number; _search?: (ListItem | ListItem[])[] }): Promise<PromiseResult>
  abstract store(params: any): Promise<PromiseResult>
  abstract show(id: string): Promise<PromiseResult>
  abstract update(params: { id: string }): Promise<PromiseResult>
  abstract destroy(id: string): Promise<PromiseResult>
  abstract transfer(params: { id: string; transfer_user_id: string }): Promise<PromiseResult>
  abstract push(params: { industries: number[]; cities: number[] }): Promise<PromiseResult>
  abstract getInfoViews(params: { id: string; page: number }): Promise<PromiseResult>
}
