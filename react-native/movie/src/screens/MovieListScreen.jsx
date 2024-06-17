import * as React from "react";

import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";

import { ListItem } from "../components/ListItem";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { ErrorMessage } from "../components/ErrorMessage";

import { fetchMovies } from "../lib/api";

function MovieListScreen({ navigation }) {
  const [page, setPage] = React.useState(1)

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    keepPreviousData : true
  })

  const onListItemPress = React.useCallback(
    (movie) => {
      navigation.navigate("MovieDetails", {
        movie,
      });
    },
    [navigation]
  );
 
  const renderItem = React.useCallback(
    ({ item }) => {
      return <ListItem item={item} onPress={onListItemPress} />;
    },
    [onListItemPress]
  );

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

  return (
    <FlatList
      data={data.Search}
      renderItem={renderItem}
      keyExtractor={(item) => item.imdbID}
      onEndReachedThreshold={0.5}
      onEndReached={() => setPage(page + 1)}
    />
  );
}

export { MovieListScreen };
