package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.metier.Da;

public interface DaRepository extends JpaRepository<Da, Integer>{
	
	@Query("select d from Da d left join fetch d.client where d.client.id=:id")
	Optional<List<Da>> findAllByClient(@Param("id")Integer id);

	@Query("select d from Da d left join fetch d.specialiste where d.specialiste.id=:id")
	Optional<List<Da>> findListDaParSpecialiste(@Param("id")Integer id);
	
	@Query("select d from Da d left join fetch d.cdp where d.cdp.id=:id")
	Optional<List<Da>> findListDaParCdp(@Param("id")Integer id);
	
	@Query("select d from Da d left join fetch d.correspondant where d.correspondant.id=:id")
	Optional<List<Da>> findListDaParCorrespondant(@Param("id")Integer id);
	
	@Query("select d from Da d left join fetch d.pilote_da where d.pilote_da.id=:id")
	Optional<List<Da>> findListDaParPilote_da(@Param("id")Integer id);
	
	@Query("select d from Da d left join fetch d.client left join fetch d.specialiste left join fetch d.cdp left join fetch d.correspondant left join fetch d.pilote_da")
	Optional<List<Da>> findListDaWithAllUser();
}
