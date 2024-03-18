package com.dao;

import java.awt.Image;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.model.CuratedCollection;

public interface CuratedColnRepo extends JpaRepository<CuratedCollection,Integer>{



	}
