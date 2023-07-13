import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { connect } from 'mongoose';
import { commentModel } from '@/app/db/db';
import { getCommentArrayByParentId } from '@/app/db/dbHandlers';

type GetParams = {
  parentId: string;
};

export const GET = async (req: NextRequest, context: { params: GetParams }) => {
  try {
    console.log('HELLO WORLD');
    console.log('context.params', context.params);

    let data;

    const parentId =
      context.params.parentId === 'setup' ? '' : context.params.parentId;

    return NextResponse.json(await getCommentArrayByParentId(parentId));
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message });
  }
};
