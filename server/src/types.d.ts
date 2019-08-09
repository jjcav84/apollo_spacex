export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Launch = {
  __typename?: "Launch";
  id: Scalars["ID"];
  site?: Maybe<Scalars["String"]>;
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  isBooked: Scalars["Boolean"];
};

/**
 * Simple wrapper around our list of launches that contains a cursor to the
 * last item in the list. Pass this cursor to the launches query to fetch results
 * after these.
 **/
export type LaunchConnection = {
  __typename?: "LaunchConnection";
  cursor: Scalars["String"];
  hasMore: Scalars["Boolean"];
  launches: Array<Maybe<Launch>>;
};

export type Mission = {
  __typename?: "Mission";
  name?: Maybe<Scalars["String"]>;
  missionPatch?: Maybe<Scalars["String"]>;
};

export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export type Mutation = {
  __typename?: "Mutation";
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
  login?: Maybe<Scalars["String"]>;
};

export type MutationBookTripsArgs = {
  launchIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCancelTripArgs = {
  launchId: Scalars["ID"];
};

export type MutationLoginArgs = {
  email?: Maybe<Scalars["String"]>;
};

export enum PatchSize {
  Small = "SMALL",
  Large = "LARGE"
}

export type Query = {
  __typename?: "Query";
  launches: LaunchConnection;
  launch?: Maybe<Launch>;
  me?: Maybe<User>;
};

export type QueryLaunchesArgs = {
  pageSize?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type QueryLaunchArgs = {
  id: Scalars["ID"];
};

export type Rocket = {
  __typename?: "Rocket";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type TripUpdateResponse = {
  __typename?: "TripUpdateResponse";
  success: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
  launches?: Maybe<Array<Maybe<Launch>>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  trips: Array<Maybe<Launch>>;
};
