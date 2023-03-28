import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetResolver } from './set.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      // debug: false,
      // sortSchema: true,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // context: ({ req, res }) => ({ req, res }),
      // playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule {}
