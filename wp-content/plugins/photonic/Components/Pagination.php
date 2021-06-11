<?php
namespace Photonic_Plugin\Components;

class Pagination {
	public
		$start, 		// Index of the first element of the current dataset, relative to the total dataset; >= 1
		$end, 			// Index of the last element of the current dataset, relative to the total dataset; <= $total
		$total, 		// Total number of elements in the current dataset
		$per_page, 		// Items attempted to fetch for the current dataset; $per_page >= $end - $start + 1
		$next_token;	// Token to fetch next data set; some platforms use this instead of defining hard counts
}